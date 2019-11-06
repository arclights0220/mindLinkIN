<template>
    <div id="friendresearch">
        <h1 id="title">팀 탐색</h1>

        <List 
        :items="data"
        :showDetail="showTeamProfile"
        :followText="'가입 요청'" :unfollowText="'나가기'" 
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
                    {username: 1, nickname: "아이왑", specialty: "Web / 선린에서 젤 좋음", following: false},
                    {username: 2, nickname: "에드캔", specialty: "찬효가 부장이니 곧 좋아질 예정", following: true},
                    {username: 3, nickname: "RG", specialty: "Game", following: false},
                ]
            }
        },
        methods:{
            showTeamProfile(id){
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