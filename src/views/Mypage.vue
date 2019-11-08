<template>
  <div id="mypage">
    <nav>
      <ul id="menubar">
        <li class="menubar-logo"><img src="../assets/logo.png" alt=""/></li>
        <li class="menubar-title" @click="home">마인드링크</li>
        <li class="menubar-item"><a href="#friends">친구</a></li>
        <li class="menubar-item"><a href="#teams">팀</a></li>
        <li class="menubar-item"><a href="#rooms">회의실</a></li>
        <li class="menubar-search"><input type="text" id="search" placeholder="검색어 입력"/></li>
        <li class="menubar-item" :class="{'hide':logon}" @click="mypageListener">{{getUserData.nickname}}</li>
        <li class="menubar-item menubar-login" v-if="!logon" @click="loginListener">로그인</li>
        <li class="menubar-item menubar-login" v-else @click="logoutListener">로그아웃</li>
      </ul>
    </nav>
    <article>
      <section class="profile">
        <h1 class="title">{{getUserData.nickname}}</h1>
        <img src="../test_pi.jpg" alt="" class="profile-img">
        <div class="profile-text">
          <div class="about">
            선린인터넷고등학교 소프트웨어과에 재학중이다. <br>
            현재 동아리는 애드캔이나, 아이왑이 더 좋다고 생각한다. <br>
            대회 6개 터뜨리고 현타와서 프밍을 접으려 했으나 <br>
            요즘은 리버스 엔지니어링을 공부하고 있다. <br>
            영타가 좀 많이 느리다...
          </div>
          <div class="specialty">
            전문 분야 : <span class="specialty-item">C/C++</span>
          </div>
        </div>
      </section>
      <section class="main">
        <div class="main-friends">
          <h1 id="friends" class="title">친구</h1>
          <List 
          :items="friends"
          :showDetail="none"
          :followText="'친구 추가'" :unfollowText="'친구 삭제'" 
          :followEvent="none" :unfollowEvent="none" 
          />
          <div class="add" @click="friendResearch">
            <img src="../add.png" alt="">
          </div>
        </div>
        <div class="main-teams">
          <h1 id="teams" class="title">팀</h1>
          <List 
          :items="teams"
          :showDetail="none"
          :followText="'가입 요청'" :unfollowText="'나가기'" 
          :followEvent="none" :unfollowEvent="none" 
          />
          <div class="add" @click="teamResearch">
            <img src="../add.png" alt="">
          </div>
        </div>
        <div class="main-rooms">
          <h1 id="rooms" class="title">회의실</h1>
          <List 
          :items="rooms"
          :showDetail="none"
          :followText="'참여 요청'" :unfollowText="'나가기'" 
          :followEvent="none" :unfollowEvent="none" 
          />
          <div class="add" @click="roomResearch">
            <img src="../add.png" alt="">
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import router from "../router/index";
import List from '../components/List'
export default {
  components:{
    List,
  },
  data() {
    return {
      friends: [
        {username: 2, nickname: "송호준", specialty: "Web Engineering", following: true},
        {username: 4, nickname: "박창우", specialty: "운명 수호", following: true},
        {username: 5, nickname: "김도영", specialty: "Assembly", following: true},
      ],
      teams: [
        {username: 2, nickname: "에드캔", specialty: "찬효가 부장이니 곧 좋아질 예정", following: true},
      ],
      rooms: this.$store.state.rooms,
    };
  },
  methods: {
    loginListener() {
      router.push("/login");
    },
    logoutListener() {
      if(confirm("정말로 로그아웃 하시겠습니까?")){
        this.$store.state.logon = false;
        this.$store.state.userData = {};
        router.push('/');
      }
    },
    home() {
      router.push("/");
    },
    friendResearch(){
      router.push("/research/friend");
    },
    teamResearch(){
      router.push("/research/team");
    },
    roomResearch(){
      router.push("/research/room");
    },
    loadroom(item, idx){
      // this.$store.state.roomName = item.username;
      // this.$store.state.roomDetail = item.specialty;
      // this.$store.state.roomJson = item.json;
      // router.push("/room", init);
    },
    deleteroom(){

    },
    none(){
      alert("아직 개발 중인 기능입니다");
    },
  },
  computed: {
    logon() {
      return this.$store.state.logon;
    },
    getUserData() {
      return this.$store.state.userData;
    },
  },
};
</script>

<style scoped>
nav{
  margin: 0;
  padding: 0;
}
h1{
  margin: 0;
}
a{
  color: white;
  
  text-decoration: none;
}

.hide{
  display: none;
}

#mypage{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../mindmap.jpeg");

  font-family: 'Noto Sans KR', sans-serif;
}

#menubar {
  background-color: black;

  box-shadow: 1px 1px 5px black;

  font-family: "Noto Sans KR", sans-serif;
  word-break: keep-all;

  position: fixed;

  display: flex;

  width: 100vw;
  height: 75px;

  padding: 0;
  margin: 0;

  z-index: 1;
}
.menubar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.menubar-logo img {
  width: 40px;
  height: auto;

  padding: 0px 10px 0px 20px;
  margin-left: 15vw;
  cursor: pointer;
}
.menubar-title {
  color: #ffffff;

  font-size: 2vw;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 0px 10px;
  cursor: pointer;
}

.menubar-item {
  color: #ffffff;

  font-size: 1vw;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.5vw;
  height: 75px;

  box-sizing: border-box;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;

  cursor: pointer;
}
.menubar-item:hover {
  transition: 500ms;
  border-top: 5px solid #ffffff;
}
.menubar-search {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: 1vw;
}
#search {
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
.menubar-login {
  color: #ffffff;

  font-size: 1vw;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 15vw;
}

article{
  display: flex;
}

.title{
  color: white;

  text-align: center;
  font-size: 3vw;

  margin: 1vw;
}

.profile{
  color: white;

  background-color: black;

  box-shadow: 1px 1px 5px black;

  position: fixed;

  display: flex;
  align-items: center;
  flex-direction: column;

  width: 30vw;
  height: 100vh;

  padding: 7.5vw 5vw;
}
.profile-img{
  width: 15vw; 
  height: 15vw;
  object-fit: cover;
  border-radius: 50%;

  cursor: pointer;

  margin: 2.5vw;
}
.profile-text .specialty{
  margin: 1vw 0;
}
.profile-text .specialty-item{
  color: lightgray;

  background-color: gray;

  padding: 0 5px;
  border-radius: 2.5px;
}

.main{
  margin-top: 100px;
  margin-left: 53vw; 
}
.main>*{
  display: flex;
  align-items: center;
  flex-direction: column;
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