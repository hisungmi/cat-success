<template>
  <div id="app">
    <head-area />
    <router-view />
  </div>
</template>
<script>
import headArea from "./components/head.vue";

export default {
  name: "App",
  components: {
    headArea,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
