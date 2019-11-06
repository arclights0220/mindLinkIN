<template>
  <div id="register">
    <div class="box">
      <h1>회원가입</h1>
      <input
        type="text"
        name="username"
        placeholder="아이디"
        v-model="username"
        :class="{'input-err':err_username}"
      />
      <div style="color: red;">{{err_username}}</div>
      <input
        type="text"
        name="nickname"
        placeholder="별명"
        v-model="nickname"
        :class="{'input-err':err_nickname}"
      />
      <div style="color: red;">{{err_nickname}}</div>
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        v-model="password"
        :class="{'input-err':err_password}"
      />
      <div style="color: red;">{{err_password}}</div>
      <input
        type="password"
        name="password-check"
        placeholder="비밀번호 확인"
        v-model="password_check"
        :class="{'input-err':err_password_check}"
      />
      <div style="color: red;">{{err_password_check}}</div>
      <button @click="submit">회원가입</button>

    </div>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  data() {
    return {
      username: null,
      nickname: null,
      password: null,
      password_check: null,

      err_username: null,
      err_nickname: null,
      err_password: null,
      err_password_check: null
    };
  },
  methods: {
    submit() {
      //에러 초기화
      this.err_username = "";
      this.err_nickname = "";
      this.err_password = "";
      this.err_password_check = "";

      //폼 확인
      if (this.username == "") this.err_username = "아이디를 입력해주세요";
      if (this.nickname == "") this.err_nickname = "별명을 입력해주세요";
      if (this.password == "") this.err_password = "비밀번호를 입력해주세요";
      if (this.password.length < 8)
        this.err_password = "비밀번호가 너무 짧습니다";
      if (!this.err_password && this.password != this.password_check)
        this.err_password_check = "비밀번호가 일치하지 않습니다";

      //정상일 때
      if (
        !this.err_username &&
        !this.err_nickname &&
        !this.err_password &&
        !this.err_password_check
      ) {
        this.$store.state.logon = true;
        let userobj = {
          email: this.username,
          nickname: this.nickname,
          password: this.password
        };

        this.$store
          .dispatch("REGISTER", userobj)
          .then(data => {
            console.log(data);
            router.push("/login");
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style scoped>
#register {
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
  margin-bottom: 2vh;

  outline: none;
  transition: 0.25s;

  cursor: pointer;
}
.box button:hover {
  background: #2ecc71;
}
</style>