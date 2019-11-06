<template>
    <div id="friendresearch">
        <h1 id="title">친구 탐색</h1>

        <List 
        :items="data"
        :showDetail="showUserProfile"
        :followText="'친구 추가'" :unfollowText="'친구 삭제'" 
        :followEvent="follow" :unfollowEvent="unfollow" 
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
                    {username: 1, nickname: "신진혁", specialty: "C/C++", following: false},
                    {username: 2, nickname: "송호준", specialty: "Web Engineering", following: true},
                    {username: 3, nickname: "이준상", specialty: "algorithm", following: false},
                ]
            }
        },
        methods:{
            showUserProfile(id){
                console.log('show');
                return;
            },
            follow(id){
                console.log('follow');
                return;
            },
            unfollow(id){
                console.log('unfollow');
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