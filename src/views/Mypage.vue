<template>
  <div class="page">
    <div class="box">
      <h3>마이페이지</h3>
      <div class="container">
        <form v-on:submit.prevent="my">
        <div> 이름 : 
          <input id="myid" :value = " name" />
        </div>
        <div> 아이디 : 
          <input id="myid" :value = " id" />
        </div>
        <div class="btn">
          <button type="submit">수정하기</button>
          <span class="caption1"
            >또는 <router-link to="/">홈</router-link>으로 돌아가기</span>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "Mypage",
    data() {
    return {
    id : '',
    name: '', 
    };
  },
    mounted() {
      this.name = this.$store.state.name;
      this.id = this.$store.state.id;
    },
    
}

</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>