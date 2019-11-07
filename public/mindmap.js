function init() {

  var $ = go.GraphObject.make;

  myDiagram =
    $(go.Diagram, "myDiagramDiv",
      {
        "commandHandler.copiesTree": true,
        "commandHandler.copiesParentKey": true,
        "commandHandler.deletesTree": true,
        "draggingTool.dragsTree": true,
        "undoManager.isEnabled": true
      });

  myDiagram.addDiagramListener("Modified", function(e) {
    var button = document.getElementById("SaveButton");
    if (button) button.disabled = !myDiagram.isModified;
    var idx = document.title.indexOf("*");
    if (myDiagram.isModified) {
      if (idx < 0) document.title += "*";
    } else {
      if (idx >= 0) document.title = document.title.substr(0, idx);
    }
  });

  myDiagram.nodeTemplate =
    $(go.Node, "Auto",
      { selectionObjectName: "TEXT"},
      $(go.Shape,"Circle",
        {
          fill:"white",
          stretch: go.GraphObject.Horizontal,
          strokeWidth: 5,
          maxSize:new go.Size(150,150),
          portId: "", fromSpot: go.Spot.LeftRightSides, toSpot: go.Spot.LeftRightSides
        },
        new go.Binding("stroke", "brush"),
        new go.Binding("fromSpot", "dir", function(d) { return spotConverter(d, true); }),
        new go.Binding("toSpot", "dir", function(d) { return spotConverter(d, false); })),
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      new go.Binding("locationSpot", "dir", function(d) { return spotConverter(d, false); }),

      $(go.TextBlock,
        {
          overflow: go.TextBlock.OverflowClip,
          name: "TEXT",
          maxSize: new go.Size(60, 60),
          editable: true
        },
        new go.Binding("text", "text").makeTwoWay(),
        )
    );

  myDiagram.nodeTemplate.selectionAdornmentTemplate =
    $(go.Adornment, "Spot",
      $(go.Panel, "Auto",
        $(go.Shape,"Circle", { fill: null, stroke: "dodgerblue", strokeWidth: 5 }),
        $(go.Placeholder, { margin: new go.Margin(0) }),
      ),
      $("Button",
        {
          alignment: go.Spot.Right,
          alignmentFocus: go.Spot.Left,
          click: addNodeAndLink  
        },
        $(go.TextBlock, "+", 
          {stroke:"blue", font: "bold 8pt sans-serif" })
      )
    );

  myDiagram.nodeTemplate.contextMenu =
    $("ContextMenu",
      $("ContextMenuButton",
        $(go.TextBlock, "글자 크게"),
        { click: function(e, obj) { changeTextSize(obj, 1.1); } }),
      $("ContextMenuButton",
        $(go.TextBlock, "글자 작게"),
        { click: function(e, obj) { changeTextSize(obj, 1 / 1.1); } }),
      $("ContextMenuButton",
        $(go.TextBlock, "굵게/얇게"),
        { click: function(e, obj) { toggleTextWeight(obj); } }),
      $("ContextMenuButton",
        $(go.TextBlock, "복사"),
        { click: function(e, obj) {if(e.key!=0) e.diagram.commandHandler.copySelection(); } }),
      $("ContextMenuButton",
        $(go.TextBlock, "삭제"),
        { click: function(e, obj) {if(e.key!=0) e.diagram.commandHandler.deleteSelection(); } }),
      $("ContextMenuButton",
        $(go.TextBlock, "실행 취소"),
        { click: function(e, obj) { e.diagram.commandHandler.undo(); } }),
      $("ContextMenuButton",
        $(go.TextBlock, "실행 복원"),
        { click: function(e, obj) { e.diagram.commandHandler.redo(); } }),
      $("ContextMenuButton",
        $(go.TextBlock, "정렬"),
        {
          click: function(e, obj) {
            var sort = obj.part;
            sort.diagram.startTransaction("Subtree Layout");
            layoutTree(sort.adornedPart);
            sort.diagram.commitTransaction("Subtree Layout");
          }
        }
      )
    );

  myDiagram.linkTemplate =
    $(go.Link,
      {
        curve: go.Link.Bezier,
        fromShortLength: -6,
        toShortLength: -6,
        selectable: false
      },
      $(go.Shape,
        { strokeWidth: 10 },
        new go.Binding("stroke", "toNode", function(n) {
          if (n.data.brush) return n.data.brush;
          return "black";
        }).ofObject())
    );

  myDiagram.contextMenu =
    $("ContextMenu",
      $("ContextMenuButton",
        $(go.TextBlock, "붙여넣기"),
        { click: function(e, obj) { e.diagram.commandHandler.pasteSelection(e.diagram.lastInput.documentPoint); } }),
      $("ContextMenuButton",
        $(go.TextBlock, "실행 취소"),
        { click: function(e, obj) { e.diagram.commandHandler.undo(); } },
        new go.Binding("visible", "", function(o) { return o.diagram && o.diagram.commandHandler.canUndo(); }).ofObject()),
      $("ContextMenuButton",
        $(go.TextBlock, "실행 복원"),
        { click: function(e, obj) { e.diagram.commandHandler.redo(); } },
        new go.Binding("visible", "", function(o) { return o.diagram && o.diagram.commandHandler.canRedo(); }).ofObject()),
      $("ContextMenuButton",
        $(go.TextBlock, "저장"),
        { click: function(e, obj) { save(); } }),
      $("ContextMenuButton",
        $(go.TextBlock, "로드"),
        { click: function(e, obj) { load(); } })
    );

  myDiagram.addDiagramListener("SelectionMoved", function(e) {
    var rootX = myDiagram.findNodeForKey(0).location.x;
    myDiagram.selection.each(function(node) {
      if (node.data.parent !== 0) return;
      var nodeX = node.location.x;
      if (rootX < nodeX && node.data.dir !== "right") {
        updateNodeDirection(node, "right");
      } else if (rootX > nodeX && node.data.dir !== "left") {
        updateNodeDirection(node, "left");
      }
      layoutTree(node);
    });
  });

  load();
}

function spotConverter(dir, from) {
  if (dir === "left") {
    return (from ? go.Spot.Left : go.Spot.Right);
  } else {
    return (from ? go.Spot.Right : go.Spot.Left);
  }
}

function changeTextSize(obj, factor) {
  var adorn = obj.part;
  adorn.diagram.startTransaction("Change Text Size");
  var node = adorn.adornedPart;
  var t = node.findObject("TEXT");
  t.scale *= factor;
  adorn.diagram.commitTransaction("Change Text Size");
}

function toggleTextWeight(obj) {
  var adorn = obj.part;
  adorn.diagram.startTransaction("Change Text Weight");
  var node = adorn.adornedPart;
  var t = node.findObject("TEXT");
  var idx = tb.font.indexOf("bold");
  if (idx < 0) {
    t.font = "bold " + t.font;
  } else {
    t.font = t.font.substr(idx + 5);
  }
  adorn.diagram.commitTransaction("Change Text Weight");
}

function updateNodeDirection(node, dir) {
  myDiagram.model.setDataProperty(node.data, "dir", dir);
  var cnode = node.findTreeChildrenNodes(); 
  while (cnode.next()) {
    updateNodeDirection(cnode.value, dir);
  }
}

function addNodeAndLink(e, obj) {
  var adorn = obj.part;
  var diagram = adorn.diagram;
  diagram.startTransaction("Add Node");
  var oldnode = adorn.adornedPart;
  var olddata = oldnode.data;
  var newdata = { text: "idea", brush: olddata.brush, dir: olddata.dir, parent: olddata.key };
  if(newdata.parent==0){
    newdata.brush="#"+Math.round(Math.random()*0xffffff).toString(16);
  }
  diagram.model.addNodeData(newdata);
  layoutTree(oldnode);
  diagram.commitTransaction("Add Node");

  var newnode = diagram.findNodeForData(newdata);
  if (newnode !== null) diagram.scrollToRect(newnode.actualBounds);
}

function layoutTree(node) {
  if (node.data.key === 0) { 
    Sort();  
  } else {  
    var parts = node.findTreeParts();
    layoutAngle(parts, node.data.dir === "left" ? 180 : 0);
  }
}

function layoutAngle(parts, angle) {
  var layout = go.GraphObject.make(go.TreeLayout,
    {
      angle: angle,
      arrangement: go.TreeLayout.ArrangementFixedRoots,
      nodeSpacing: 5,
      layerSpacing: 20,
      setsPortSpot: false, 
      setsChildPortSpot: false
    });
  layout.doLayout(parts);
}

function Sort() {
  var root = myDiagram.findNodeForKey(0);
  if (root === null) return;
  myDiagram.startTransaction("Layout");
  var right = new go.Set();
  var left = new go.Set();
  root.findLinksConnected().each(function(link) {
    var child = link.toNode;
    if (child.data.dir === "left") {
      left.add(root); 
      left.add(link);
      left.addAll(child.findTreeParts());
    } else {
      right.add(root); 
      right.add(link);
      right.addAll(child.findTreeParts());
    }
  });
  layoutAngle(right, 0);
  layoutAngle(left, 180);
  myDiagram.commitTransaction("Layout");
}

function save() {
  document.getElementById("mySavedModel").value = myDiagram.model.toJson();
  myDiagram.isModified = false;
  
}
function load() {
  myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
  Sort();
}