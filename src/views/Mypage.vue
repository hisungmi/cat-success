<template>
  <div class="page">
    <div class="box">
      <h3>마이페이지</h3>
      <div class="container">
        <form v-on:submit.prevent="my">
        <div>
          <p>{{ id }}</p>
        </div>
        <div>
          <input
            type="password"
            class="password2"
            placeholder="id"
            v-model="id"
          />
        </div>
        <div class="btn">
          <button type="submit">수정하기</button>
          <span
            >또는 <router-link to="/">홈</router-link>으로 돌아가기</span>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/index.js';

export default {
    name: "Mypage",
    data() {
    return {
    id : '', 
    };
  },

  methods: {
    async my() {
     this.id= `${userData.id}` ;
     }
  }
}

</script>

<style>

</style>