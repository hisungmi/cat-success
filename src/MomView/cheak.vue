<template>
  <div class="wrap">
    <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/momcheak">사료무게</router-link></a></li>
          <li><a href="#"><router-link to="/one">모돈 확인사항</router-link></a></li>
          <ol>
              <li><a><router-link to="/one">모돈 체평점</router-link></a></li>
              <li><a><router-link to="/two">모돈 회음부</router-link></a></li>
              <li><a><router-link to="/three">모돈 분변,분뇨</router-link></a></li>
              <li><a><router-link to="/four">모돈 유방</router-link></a></li>
          </ol>
        </ul>  
    </div>
    <div>
    </div>    
    <div class="footer">
        성미 010-7777-8888
    </div>
</div>

</template>

<script>
export default {
    name: "cheak",
    mounted() {
    let isLogin = this.$store.getters.isLogin;
    console.log(isLogin);

    if (!isLogin) { 
        alert('로그인 후 이용하세요.');
        this.$router.push('/login');
    }
  },
    }
</script>

<style scoped>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>