<template>
  <div id="home">
    <nav>
      <ul id="menubar">
        <li class="menubar-logo"><img src="../assets/logo.png" alt=""></li>
        <li class="menubar-title">마인드링크</li>
        <li class="menubar-item">개요</li>
        <li class="menubar-item">탐색</li>
        <li class="menubar-search"><input type="text" id="search" placeholder="검색어 입력"></li>
        <li class="menubar-item" v-if="logon" @click="mypage">{{getUserData.nickname}}</li>
        <li style="diplay: none;" v-else></li>
        <li class="menubar-item menubar-login" v-if="!logon" @click="loginListener">로그인</li>
        <li class="menubar-item menubar-login" v-else @click="logoutListener">로그아웃</li>
      </ul>
    </nav>
    <article id="content">
      <section id="outline">
        <div class="text">
          <h1 style="font-size: 5vw">Mindlink</h1>
          <p style="font-size: 2vw">
            마인드링크는 브레인스토밍 방식을 통해 <br>
            기존의 오래 걸리던 회의 과정을 <br>
            더욱 효율적이고 체계적으로 만들어줍니다 <br>
          </p>
        </div>
        <div class="image">
          <img src="../assets/logo.png" alt="">
        </div>
      </section>
      <section id="research" class="image">
        <router-link to="/research/friend" id="research-friend">
          <h1>친구 탐색</h1>
        </router-link>
        <router-link to="/research/team" id="research-team">
          <h1>팀 탐색</h1>
        </router-link>
        <router-link to="/research/room" id="research-room">
          <h1>회의실 탐색</h1>
        </router-link>
      </section>
    </article>
  </div>
</template>

<script>
  import router from '../router/index'
  export default {
    data(){
      return{
        nickname: ""
      }
    },
    methods:{
      loginListener(){
        router.push("/login");
      },
      logoutListener(){
        if(confirm("정말로 로그아웃 하시겠습니까?")){
          this.$store.state.logon = false;
          this.$store.state.userData = {};
          router.push('/');
        }
      },
      mypage(){
        router.push("/mypage");
      }
    },
    computed:{
      logon(){
        return this.$store.state.logon
      },
      getUserData(){
        return this.$store.state.userData
      }
    }
  }
</script>

<style scoped>
/*
    font-family: 'Nanum Myeongjo', serif; 나눔명조
    font-family: 'Nanum Gothic', sans-serif; 나눔고딕
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Anton', sans-serif; 굵은 영어
    font-family: 'Abril Fatface', cursive; 굵은 영어 펜글씨
    font-family: 'EB Garamond', serif; 가는 영어
    font-family: 'Crete Round', serif; 중간 영어
*/
  nav{
    margin: 0;
    padding: 0;
  }
  h1{
    margin: 0;
  }

  .image{
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
  }

  #menubar{
    background-color: black;

    box-shadow: 1px 1px 5px black;

    font-family: 'Noto Sans KR', sans-serif;
    word-break: keep-all;

    position: fixed;

    display: flex;

    width: 100vw;
    height: 75px;

    padding: 0;
    margin: 0;
  }
  .menubar-logo{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menubar-logo img{
    width: 40px;
    height: auto;

    padding: 0px 10px 0px 20px;
    margin-left: 15vw;
  }
  .menubar-title{
    color: #ffffff;

    font-size: 2vw;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px 20px 0px 10px;
  }
  .menubar-item{
    color: #ffffff;

    font-size: 1vw;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
      
    width: 4.5vw;
    height: 75px;
    cursor: pointer;

    box-sizing: border-box;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;

  }
  .menubar-item:hover{
    transition: 500ms;
    border-top: 5px solid #ffffff;;
  }
  .menubar-search{
    display: flex;
    justify-content: center;
    align-items: center;
      
    margin-left: auto;
    cursor: pointer;
    margin-right: 1vw;
  }
  #search{
    color: white;

    background-color: rgb(71, 71, 77);

    width: 15vw;
    height: 30px;

    padding: 5px 10px 5px 10px;
    border: hidden; 
    border-radius: 5px;
  }
  ::placeholder {
    color: rgb(90, 90, 90);
    opacity: 1;
  }
  .menubar-login{
    color: #ffffff;

    font-size: 1vw;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-right: 15vw;
  }

  .title{
    text-align: center;
    font-size: 5vw;
    font-family: 'Noto Sans KR', sans-serif;
    
    padding: 40px 0px 40px 0px;
  }

  #outline{
    color: white;

    background-color: black;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  #outline .text{
    font-family: 'Noto Sans KR', sans-serif;

    width: 40vw;
    height: auto;
  }
  #outline .image img{
    width: 20vw;
    height: auto;
  }

  #research{
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 3vw;
    overflow-x: hidden;

    background-image: url("../mindmap.jpeg");

    display: flex;

    width: 100vw;
    height: 100vh;
  }
  #research-friend{
    color: white;

    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
  }
  #research-team{
    color: white;

    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    animation-delay: 1s;

    width: 100vw;
    height: 100vh;
  }
  #research-room{
    color: white;

    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
  }
  #research-friend:hover{
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.25));
  }
  #research-team:hover{
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.25));
  }
  #research-room:hover{
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.25));
  }
</style>