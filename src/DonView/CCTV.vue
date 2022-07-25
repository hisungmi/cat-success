<template>
    <div class="wrap">
    <div class="sidebar">
        <ul class="sidemenu">
          <li><a href="#"><router-link to="/CCTV">CCTV</router-link></a></li>
        </ul>  
    </div>
    <!-- <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/donserve">돈사환경</router-link></a></li>
          <li><a href="#"><router-link to="/donchart">그래프</router-link></a></li>
          <li><a href="#"><router-link to="/CCTV">CCTV</router-link></a></li>
        </ul>  
    </div> -->
    <div>
    <body>
         <img src="http://172.20.10.5:8091/?action=stream" width="500px" height="300px" alt="CCTV" />
    </body>
    </div>    
    <div class="footer">
        꿀!사 관리자 번호 010-XXXX-XXXX
    </div>
</div>
</template>

<script>
export default {
    name: "CCTV",
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