<template>
    <div id="list">
        <div class="list-item" v-for="item in items" :key="item.username">
            <img class="image" src="../test_pi.jpg" alt="" @click="showDetail(item.username)">
            <span class="name" @click="showDetail(item.username)">{{item.nickname}}</span>
            <span class="specialty">{{item.specialty}}</span>
            <span class="follow" style="color: red" v-if="item.following" @click="unfollowEvent(item.username)">{{unfollowText}}</span>
            <span class="follow" style="color: green" v-else @click="followEvent(item.username)">{{followText}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            items: Array,

            showDetail: Function,

            followText: String,
            unfollowText: String,

            followEvent: Function,
            unfollowEvent: Function,
        }
    }
</script>

<style scoped>
    #list{
        display: flex;
        align-items: center;
        flex-direction: column;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;

        background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../mindmap.jpeg");
    }

    .list-item{
        color: white;

        background-color: black;

        box-shadow: 1px 1px 5px black;

        font-family: 'Noto Sans KR', sans-serif;

        display: flex;
        align-items: center;

        width: 35vw;
        height: 100px;

        margin: 10px auto;
    }

    .list-item .image{
        width: 70px; 
        height: 70px;
        object-fit: cover;
        border-radius: 50%;

        margin-left: 1vw;
        margin-right: 1vw;

        cursor: pointer;
    }
    .list-item .name{
        font-size: 1.5vw;

        margin-right: 0.5vw;

        cursor: pointer;
    }
    .list-item .specialty{
        color: gray;

        font-size: 1vw;
    }
    .list-item .follow{
        font-size: 1vw;

        margin-left: auto;
        margin-right: 1vw;

        cursor: pointer;
    }
</style>

</style>