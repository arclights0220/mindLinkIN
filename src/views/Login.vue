<template>
  <div id="login">
    <form class="box" @submit="submit">
      <h1>로그인</h1>
      <input
        type="text"
        name="username"
        placeholder="아이디"
        v-model="username"
        :class="{'input-err':err_username}"
      />
      <div style="color: red;">{{err_username}}</div>
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        v-model="password"
        :class="{'input-err':err_password}"
      />
      <div style="color: red;">{{err_password}}</div>
      <button type="submit" name="submit">로그인</button>
      <div id="gotoregister" @click="register">계정이 없으신가요?</div>
    </form>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  data() {
    return {
      username: "",
      password: "",

      err_username: "",
      err_password: "",
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();

      //에러 초기화
      this.err_username = "";
      this.err_password = "";

      //폼 확인
      if (this.username == "") this.err_username = "아이디를 입력해주세요";
      if (this.password == "") this.err_password = "비밀번호를 입력해주세요";

      //정상일 때
      if (!this.err_username && !this.err_password) {
        this.$store
          .dispatch("LOGIN", {
            email: this.username,
            password: this.password
          })
          .then(data => {
            let token = data.data.data;
            sessionStorage.setItem("token",token)
            this.$store.dispatch("GET_USER", token).then(data => {
              let user = data.data.data;
              this.$store.state.userData = user; // 유저 정보
              this.$store.state.logon = true;

              this.$store.state.rooms =  JSON.parse(localStorage.getItem(user.email + "_rooms"));
              if(!this.$store.state.rooms) this.$store.state.rooms = [];
            });
            router.push("/");
          })
          .catch(err => {
            if(err.message == "Network Error") alert("네트워크를 확인하세요");
            else alert("가입하지 않은 아이디이거나 잘못된 비밀번호입니다");
          });
      }
    },
    register() {
      router.push("/register");
    },
  },
};
</script>




<style scoped>
#login {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../mindmap.jpeg");

  font-family: "Noto Sans KR", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
}

.box {
  background: black;

  box-shadow: 1px 1px 5px black;

  font-size: 0.5vw;
  font-family: "Noto Sans KR", sans-serif;

  display: flex;
  align-items: center;
  flex-direction: column;

  width: 20vw;
  padding: 4vh;
}
.box h1 {
  color: white;

  font-size: 2vw;
  font-weight: 500;

  margin: 0;
}

.box input {
  color: white;

  background: none;

  text-align: center;

  width: 15vw;
  height: 5vh;

  border: 2px solid #3498db;
  border-radius: 100vw;
  margin-top: 4vh;

  outline: none;
  transition: 0.25s;
}
.box input:hover,
.box input:focus {
  border-color: #2ecc71;
}
.box .input-err {
  border-color: #ff0000;
}

.box button {
  color: white;

  background: none;

  text-align: center;

  display: block;

  width: 10vw;
  height: 5vh;

  border: 2px solid #2ecc71;
  border-radius: 100vw;
  margin-top: 4vh;

  outline: none;
  transition: 0.25s;

  cursor: pointer;
}
.box button:hover {
  background: #2ecc71;
}

#gotoregister {
  color: gray;

  text-decoration: none;
  font-size: 0.75vw;

  margin: 2vh;

  cursor: pointer;
}
</style>