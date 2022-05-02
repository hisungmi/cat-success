
<template>
  <div class="page">
    <div class="box">
      <div class="id">
        <label for="id">아이디</label><br />
        <input
          type="text"
          v-model="id"
          placeholder="Username"
          required
          autofocus
        />
      </div>
      <div class="pw">
        <label for="pw">비밀번호</label><br />
        <input
          type="password"
          v-model="pw"
          placeholder="**********"
          required
          autofocus
        />
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
      id: null,
      pw: null,
      allUsers: [
        { id: sungmi, name: "sungmi", pw: "222" },
        { id: bumjun, name: "bumjune", pw: "111" },
      ],
    };
  },
  methods: {
    login() {
      let selectedUser = null
      this.allUsers.forEach(user => {
        if (user.id === this.id) selectedUser = user
      })
      if (selectedUser === null) alert("입력하신 아이디가 없습니다.")
      else {
        if(user.pw !== this.pw)
        alert("아이디와 비밀번호가 일치하지 않습니다.")
        else {
          alert("로그인이 완료되었습니다.")
        }
      }
      // this.$router.replace("hello");
      // this.$axios
      //   .post("/login", data)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
};
</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>
