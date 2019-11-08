<template>
    <div id="friendresearch">
        <h1 id="title">친구 탐색</h1>

        <List 
        :items="data"
        :showDetail="none"
        :followText="'친구 추가'" :unfollowText="'친구 삭제'" 
        :followEvent="none" :unfollowEvent="none" 
        />
        <div class="add" @click="none">
            <img src="../add.png" alt="">
        </div>
    </div>
</template>

<script>
import List from '../components/List'
export default {
    components:{
        List,
    },
    data(){
        return{
            data: [
                {username: 1, nickname: "신진혁", specialty: "C/C++", following: false},
                {username: 2, nickname: "송호준", specialty: "Web Engineering", following: true},
                {username: 3, nickname: "이준상", specialty: "algorithm", following: false},
                {username: 4, nickname: "박창우", specialty: "운명 수호", following: true},
                {username: 5, nickname: "김도영", specialty: "Assembly", following: true},
            ],
        }
    },
    methods:{
        none(){
            alert("아직 개발 중인 기능입니다");
        },
    },
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