<template>
  <div class="wrap">
    <h1>돈사그래프</h1>
    <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/donserve">돈사환경</router-link></a></li>
          <li><a href="#"><router-link to="/donchart">그래프</router-link></a></li>
          <li><a href="#"><router-link to="/CCTV">CCTV</router-link></a></li>
        </ul>  
    </div>
    <div class="content">
      <div>
        <h3>차트</h3>
        <canvas id="planet-chart" width="auto"></canvas>
      </div>
    </div>    
    <div class="footer">
        성미 010-7777-8888
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from '../planet-data.js'

export default{
  name: 'donchart',
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
  }
};
</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>