<template>
  <div id="home">
    <nav>
      <ul id="menubar">
        <li class="menubar-logo">
          <img src="../assets/logo.png" alt />
        </li>
        <li class="menubar-title" @click="push">마인드링크</li>
        <li class="menubar-item">개요</li>
        <li class="menubar-item">탐색</li>
        <li class="menubar-search">
          <input type="text" id="search" placeholder="검색어 입력" />
        </li>
        <li class="menubar-item" v-if="logon" @click="mypageListener">{{getUserData.nickname}}</li>
        <li style="diplay: none;" v-else></li>
        <li class="menubar-item menubar-login" v-if="!logon" @click="loginListener">로그인</li>
        <li class="menubar-item menubar-login" v-else @click="logoutListener">로그아웃</li>
      </ul>
    </nav>
    <section>
      <div id="mypage-main">
        <div class="mypage-logo">
          <h1 style="font-size: 4em;margin-left: 2vw;">My Page</h1>
        </div>
        <div class="mypage-set">
          <div class="mypage-privacy"></div>
          <div class="mypage-team"></div>
          <div class="mypage-public"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  data() {
    return {
      nickname: ""
    };
  },
  methods: {
    loginListener() {
      router.push("/login");
    },
    logoutListener() {
      if (confirm("정말로 로그아웃 하시겠습니까?"))
        this.$store.state.logon = false;
      this.$store.state.userData = {};
      router.push("/");
    },
    getName() {
      this.nickname = getUserData.nickname.substr(0, 6);
      return this.nickname;
    },
    mypageListener() {
      router.push("/mypage");
    },
    push() {
      router.push("/");
    }
  },
  computed: {
    logon() {
      return this.$store.state.logon;
    },
    getUserData() {
      return this.$store.state.userData;
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
#menubar {
  background-color: black;

  font-family: "Noto Sans KR", sans-serif;
  word-break: keep-all;

  display: flex;

  width: 100vw;
  height: 75px;

  padding: 0;
  margin: 0;
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
#mypage-main {
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.mypage-set {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.mypage-privacy {
  width: 25%;
  padding: 5vh 5vw 5vh 5vw;
  border: 1px solid black;
  margin: 0px 10px;
  margin-right: 5px;
}
.mypage-team {
  width: 25%;
  padding: 5vh 5vw 5vh 5vw;
  border: 1px solid black;
  margin: 0px 5px;
}
.mypage-public {
  width: 25%;
  padding: 5vh 5vw 5vh 5vw;
  border: 1px solid black;
  margin: 0px 10px;
  margin-left: 5px;
}
</style>

