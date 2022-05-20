<template>
  <div id="app">
    <head-area />
    <Menubar />
    <router-view />
    <PlanetChart />
    <!-- <Table /> -->
  </div>
</template>
<script>
import headArea from './components/head.vue';
import Menubar from './components/menu.vue';
import PlanetChart from './components/PlanetChart.vue';
// import Table from './components/Dth.vue';

export default {
  name: 'App',
  components: {
    headArea,
    Menubar,
    PlanetChart,
    //Table,
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
