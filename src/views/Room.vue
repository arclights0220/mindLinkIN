<template>
    <div id="temp" style="width:100vw;height:100vh">
        <div id="myDiagramDiv" onload="load()" style="width:100vw; height:100vh;"></div>
        <div>{{getData.roomName}}, {{getUserData.userData}}</div>
        <button onclick="Sort()">Sort</button>  
        <button onclick="Save()" @click="modelSave" id="pushJson">SaveOut</button>
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
import router from "../router/index";
export default {
    data(){
        return{

        }
    },
    methods: {
        modelSave(){
            this.$store.state.Mjson = document.getElementById("mySavedModel").value;
            router.push('/mypage');
        },
        
    },
    mounted: function() {
        init();
    },
    computed: {
        getData(){
            return this.$store.state.roomName;
        },
        getUserData(){
            return this.$store.state.userData;
        }
    }

}
</script>

<style scoped>
    *{
      padding:0;
      margin: 0;
    }
    #temp{
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