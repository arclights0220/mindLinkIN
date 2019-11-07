<template>
    <div id="createprivacyroom">
        <form class="box" @submit="submit">
            <h1>회의실 생성</h1>
            <input
                type="text"
                name="roomname"
                placeholder="회의실 제목"
                v-model="roomname"
                :class="{'input-err':err_roomname}"
            />
            <div style="color: red;">{{err_roomname}}</div>
            <button type="submit" name="submit">생성</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            roomname: "",

            err_roomname: "",
        };
    },
    methods: {
        submit(e) {
            e.preventDefault();

            //에러 초기화
            this.err_roomname = "";

            //폼 확인
            if (this.roomname == "") this.err_roomname = "제목을 입력해주세요";

            //정상일 때
            if (!this.err_roomname) {
                
            }
        },
    }
}
</script>

<style scoped>
#createprivacyroom {
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