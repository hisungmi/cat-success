<template>
  <div class="wrap">
    <h1>돈사환경</h1>
    <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/donserve">돈사환경</router-link></a></li>
          <li><a href="#"><router-link to="/donchart">그래프</router-link></a></li>
          <li><a href="#"><router-link to="/CCTV">CCTV</router-link></a></li>
        </ul>  
    </div>
    <div class="content">
      <body>
      <table>
        <thead class="tr">
          <tr >
            <th> </th>
            <th>날짜</th>
            <th>온도</th>
            <th>습도</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="tr">
          <td>{{user.num}}</td>
          <td>{{user.data}}</td>
          <td>{{user.Temperature}}</td>
          <td>{{user.Humidity}}</td>
          </tr>
        </tbody>
      </table>
      </body>
    </div>    
    <div class="footer">
        성미 010-7777-8888
    </div>
</div>
</template>

<script>
// import Table from '../components/Dth.vue';

export default {
    name: "donserve",
    componrnts: {
        // Table,
    },
    data() {
      return {
        users: [
          {num: '1', data: '2022.04.11',Temperature: '26℃', Humidity: '60%' },
          {num: '2', data: '2022.04.12',Temperature: '25℃', Humidity: '62%' },
          {num: '3', data: '2022.04.13',Temperature: '26℃', Humidity: '61%' },
          {num: '4', data: '2022.04.14',Temperature: '24℃', Humidity: '60%' },
          {num: '5', data: '2022.04.15',Temperature: '25℃', Humidity: '62%' },
          {num: '6', data: '2022.04.16',Temperature: '26℃', Humidity: '62%' },
          {num: '7', data: '2022.04.17',Temperature: '26℃', Humidity: '60%' },
        ]
      }
    }
    
}
</script>

<style scoped> 
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>