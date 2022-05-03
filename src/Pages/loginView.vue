
<template>
  <div class="page">
    <div class="box">
      <div class="id">
        <!-- <label for="id">아이디</label><br />
        <input
          type="text"
          v-model="id"
          placeholder="Username"
          required
          autofocus
        /> -->
        <v-text-field v-model="id" label="Username"></v-text-field>
      </div>
      <div class="pw">
        <!-- <label for="pw">비밀번호</label><br />
        <input
          type="password"
          v-model="pw"
          placeholder="**********"
          required
          autofocus
        /> -->
        <v-text-field v-model="pw" label="password"></v-text-field>
      </div>
    </div>
    <div class="caption">
      <router-link to="/findidForm"> 아이디찾기</router-link>
      <router-link to="/findpwForm"> 비밀번호찾기</router-link>
      <router-link to="/SignupForm">회원가입</router-link>
    </div>
    <div class="btn">
      <button type="submit" @click="login()">로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginView",
  data() {
    return {
      id: "",
      pw: "",
    };
  },
  methods: {
    login() {
      this.$router.replace("hello");
      this.$axios
        .post("/login", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>
