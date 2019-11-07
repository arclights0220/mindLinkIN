<template>
    <div id="sample" style="width:100vw;height:100vh">
        <div id="myDiagramDiv" onload="load()" style="border: solid 1px black; width:100vw; height:100vh;"></div>
        <button id="SaveButton" onclick="save()">Save</button>
        <button onclick="load()">Load</button>
        <button onclick="Sort()">Sort</button>
        <textarea id="mySavedModel" style="width:100%;height:400px; display:none;">
            { 
                "class": "go.TreeModel",
                "nodeDataArray": [
                    {"key":0, "text":"Mind Map", "loc":"0 0"} 
                ]
            }
        </textarea>
    </div>
</template>

<script>

export default {
    mounted: function() {
        init();
    }
}
</script>

<style scoped>
    *{
      padding:0;
      margin: 0;
    }
    #mySavedModel{
        overflow:hidden;
    }
    button{
      display: inline-block;
      position: relative;
      z-index:2000;
      bottom:95vh;
      left:75vw;
      width:100px;
      height:30px;
      background-color:white;
      border-color:silver;
      color:lightslategrey;
    }
</style>