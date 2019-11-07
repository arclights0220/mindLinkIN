<template>
    <div id="roomresearch">
        <h1 id="title">회의실 탐색</h1>

        <List 
        :items="data"
        :showDetail="showRoomProfile"
        :followText="'참여 요청'" :unfollowText="'나가기'" 
        :followEvent="join" :unfollowEvent="leave" 
        />
        <div class="add" @click="createRoom">
            <img src="../add.png" alt="">
        </div>
    </div>
</template>

<script>
import router from "../router/index";
import List from '../components/List'
export default {
    components:{
        List
    },
    data(){
        return{
            data: [
                {username: 1, nickname: "디콘방", specialty: "얘들아 미안해 ㅜㅜ", following: true},
                {username: 2, nickname: "천코대", specialty: "준상아 미안해 ㅜㅜ", following: false},
                {username: 3, nickname: "정보통신 수행방", specialty: "시온아 미리 미안해 ㅜㅜ", following: true},
            ]
        }
    },
    methods:{
        showRoomProfile(id){
            console.log('show');
            return;
        },
        join(id){
            console.log('join');
            return;
        },
        leave(id){
            console.log('left');
            return;
        },
        createRoom(){
            if(this.$store.state.logon)
                router.push('/create/room/privacy');
            else
                router.push('/login');
        },
    },
    computed:{
        logon(){
            return this.$store.state.logon
        },
    }
}
</script>

<style scoped>
h1{
    margin: 0;
}

#title{
    font-size: 2.5vw;

    padding-top: 2.5vw;
    padding-bottom: 2.5vw;        
}
#roomresearch{
    color: white;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../mindmap.jpeg");

    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;

    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100vw;
    min-height: 100vh;
}

.add{
    color: white;

    background-color: black;

    box-shadow: 1px 1px 5px black;

    font-family: 'Noto Sans KR', sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 35vw;
    height: 100px;

    margin-top: 10px;
    margin-bottom: 5vw;
}
.add img{
    width: 50px;
    height: 50px;
}
</style>