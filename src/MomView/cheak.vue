<template>
  <div class="wrap">
    <h1>확인사항</h1>
    <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/momcheak">모돈평가</router-link></a></li>
          <li><a href="#"><router-link to="/one">확인사항</router-link></a></li>
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
    }
</script>

<style scoped>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>