<template>
  <div class="wrap">
    <h1>돈사그래프</h1>
    <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/donserve">돈사환경</router-link></a></li>
          <li><a href="#"><router-link to="/donchart">그래프</router-link></a></li>
        
        </ul>  
    </div>
    <div class="content">
      <div>
        <h3>차트</h3>
        <!-- <canvas id="planet-chart" width="auto"></canvas> -->
        <LineChartGenerator
          :chart-options="chartOptions"
          :chart-data="chartData"
          :chart-id="chartId"
          :dataset-id-key="datasetIdKey"
          :plugins="plugins"
          :css-classes="cssClasses"
          :styles="styles"
          :width="width"
          :height="height"
        />
      </div>
    </div>    
    <div class="footer">
        성미 010-7777-8888
    </div>
  </div>
</template>

<script>

import { Line as LineChartGenerator } from 'vue-chartjs/legacy'
// import LineChart from './LineChart.js'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)
export default {
  name: 'donchart',
  components: {
    LineChartGenerator,
    
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July','August', 'September','October', 'November', 'December'

        ],
        datasets: [
          {
            label: 'Temperature',
            backgroundColor: '#f87979',
            data: [21,22,26,25,26,24,23,26,25,21,26,25]
          },
          {
            label: 'Humidity',
            backgroundColor: '#f87979',
            data: [ 50 ,61,60,63,61,60,62,61,62,60,60,63]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    let isLogin = this.$store.getters.isLogin;
    console.log(isLogin);

    if (!isLogin) { 
        alert('로그인 후 이용하세요.');
        this.$router.push('/login');
    }
  },
}
// import Chart from 'chart.js'
// import planetChartData from '../planet-data.js'

// export default{
//   name: 'donchart',
//   data() {
//     return {
//       planetChartData: planetChartData
//     }
//   },
//   mounted() {
//     const ctx = document.getElementById('planet-chart');
//     new Chart(ctx, this.planetChartData);
//   }
// };
</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>