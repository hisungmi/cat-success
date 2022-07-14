<template>
  <div id="app">
    <head-area />
    <Menubar />
    <router-view />
    <!-- <LineChart /> -->
    <!-- <PlanetChart/> -->
    <!-- <Table /> -->
  </div>
</template>

<script src="vue.js"></script>
<script src="vue-nav-drawer.min.js"></script>
<script>
import headArea from './components/head.vue';
import Menubar from './components/menu.vue';
import PlanetChart from './components/PlanetChart.vue';
import LineChart from './components/Line.vue';
import VGauge from "vgauge";
import {reactive} from "vue"
// import Table from './components/Dth.vue';

export default {
  name: 'App',
  components: {
    headArea,
    Menubar,
    PlanetChart,
    LineChart,
    VGauge,
    //Table,
},
data() {
  return {
      x: 0,      
      width: "400px",
      options: {
        angle: 1,
        lineWidth: 0.1,
        radiusScale: 1,
        pointer: {
          length: 0.6,
          strokeWidth: 0.035,
          color: "#000000"
        },
        limitMax: 100,
        limitMin: 0,
        colorStart: "#6FADCF",
        colorStop: "#8FC0DA",
        strokeColor: "#E0E0E0",
        generateGradient: true,
        highDpiSupport: true
      }
    };
  },
  
};

</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'BMJUA';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>
