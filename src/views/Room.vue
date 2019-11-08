<template>
    <div id="temp" style="width:100vw;height:100vh">
        <div id="myDiagramDiv" onload="Load()" style="width:100vw; height:100vh;"></div>
        <button onclick="Sort()">정렬</button>  
        <button onclick="Save()" @click="mjsonSave">저장</button>
        <button onclick="Save()" @click="quit">나가기</button>
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
        mjsonSave(){
            let roomname = this.$store.state.roomName;
            let roomdetail = this.$store.state.roomName;
            let userdata = this.$store.state.userData;

            let newroom = {
                username: 0,
                nickname: roomname,
                specialty: roomdetail,
                following: true,
                json: document.getElementById("mySavedModel").value
            };

            this.$store.state.rooms.push(newroom);
            localStorage.setItem(userdata.email + "_rooms", this.$store.state.rooms);
        },
        quit(){
            let roomname = this.$store.state.roomName;
            let roomdetail = this.$store.state.roomName;
            let userdata = this.$store.state.userData;

            let newroom = {
                username: 0,
                nickname: roomname,
                specialty: roomdetail,
                following: true,
                json: document.getElementById("mySavedModel").value
            };

            this.$store.state.rooms.push(newroom);
            localStorage.setItem(userdata.email + "_rooms", this.$store.state.rooms);
            
            router.push('/mypage');
        }
    },
    created(){
        if(this.$store.state.roomJson){
            document.getElementById("mySavedModel").value = this.$store.state.roomJson;
            Load();
        }
    },
    mounted: function() {
        init();
    },
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
      margin: 0 1px;
      background-color:white;
      border-color:silver;
      color:lightslategrey;
    }
</style>