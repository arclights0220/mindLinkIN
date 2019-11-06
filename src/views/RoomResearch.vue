<template>
    <div id="friendresearch">
        <h1 id="title">회의실 탐색</h1>

        <List 
        :items="data"
        :showDetail="showRoomProfile"
        :followText="'참여 요청'" :unfollowText="'나가기'" 
        :followEvent="join" :unfollowEvent="leave" 
        />

    </div>
</template>

<script>
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
            }
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
    #friendresearch{
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;

        color: white;

        text-align: center;
        font-family: 'Noto Sans KR', sans-serif;

        background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../mindmap.jpeg");

        width: 100vw;
        height: 100vh;
    }
</style>