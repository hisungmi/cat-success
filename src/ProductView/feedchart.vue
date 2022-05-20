<template>
  <div class="wrap">
    <h1>그래프</h1>
    <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/feed">사료량</router-link></a></li>
          <li><a href="#"><router-link to="/feedchart">그래프</router-link></a></li>
        </ul>  
    </div>
    <div class="content">
      <line-chart></line-chart>
    </div>    
    <div class="footer">
        성미 010-7777-8888
    </div>
</div>
</template>

<script>
import LineChart from '@/차트/LineChart.vue'
export default {
    name: "feedchart",
    components: {
      LineChart,
    }
}
</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>