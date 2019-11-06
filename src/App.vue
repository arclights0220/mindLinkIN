<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import router from "./router";
  export default {
    name: "app"
  }
</script>

<style scope>
  body{
    overflow-x: hidden;
  }
</style>