<template>
<div class="wrap">
    <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/momcheak">사료무게</router-link></a></li>
          <li><a href="#"><router-link to="/one">모돈 확인사항</router-link></a></li>
        </ul>  
    </div>
    <div >
    <body>
      <div>
        <nav id="nav">
          <a>무게</a>
        </nav>
        
      </div>
      <!-- <table>
        <thead class="tr">
          <tr >
            <th> </th>
            <th>날짜</th>
            <th>체평점</th>
            <th>회음부</th>
            <th>분변/분뇨</th>
            <th>유방</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="tr">
          <td>{{user.num}}</td>
          <td>{{user.data}}</td>
          <td>{{user.grade}}</td>
          <td>{{user.Hip}}</td>
          <td>{{user.shit}}</td>
          <td>{{user.Breast}}</td>
          </tr>
        </tbody>
      </table> -->
    </body>
    </div>    
    <div class="footer">
        꿀!사 관리자 번호 010-XXXX-XXXX
    </div>
</div>
</template>

<script >
export default {
    name: "momchaeak",

    data() {
      return {
        users: [
          {num: '1', data: '2022.04.11',grade: '정상', Hip: '정상', shit: '정상', Breast:'정상'},
          {num: '2', data: '2022.04.12',grade: '정상', Hip: '정상', shit: '정상', Breast:'정상'},
          {num: '3', data: '2022.04.13',grade: '정상', Hip: '정상', shit: '정상', Breast:'정상'},
          {num: '4', data: '2022.04.14',grade: '정상', Hip: '정상', shit: '정상', Breast:'정상'},
          {num: '5', data: '2022.04.15',grade: '정상', Hip: '정상', shit: '정상', Breast:'정상'},
          {num: '6', data: '2022.04.16',grade: '정상', Hip: '정상', shit: '정상', Breast:'정상'},
          {num: '7', data: '2022.04.17',grade: '정상', Hip: '정상', shit: '정상', Breast:'정상'},
        ]
      }
    },
    mounted() {
    let isLogin = this.$store.getters.isLogin;
    
    if (!isLogin) { 
        alert('로그인 후 이용하세요.');
        this.$router.push('/login');
    }
  },

}
</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>
