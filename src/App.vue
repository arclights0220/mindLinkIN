<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import router from "./router";
export default {
  name: "app",
  created() {
    let token = sessionStorage.getItem("token");

    if (token) {
      this.$store.dispatch("GET_USER", token)
      .then(data => {
        let user = data.data.data;
        this.$store.state.userData = user; // 유저 정보
        this.$store.state.logon = true;

        this.$store.state.rooms =  JSON.parse(localStorage.getItem(user.email + "_rooms"));
        if(!this.$store.state.rooms) this.$store.state.rooms = [];
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style scope>
body {
  overflow-x: hidden;
}
</style>