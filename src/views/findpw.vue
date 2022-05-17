<template>
  <div class="page">
    <div class="box">
      <h3>비밀번호찾기</h3>
      <div>
        <input type="id" class="id2" placeholder="아이디" v-model="id" />
      </div>
      <div>
        <input type="name" class="name" placeholder="이름" v-model="name" />
      </div>
      <div>
        <input
          type="text"
          class="adnumber"
          maxlength="11"
          placeholder="관리자번호"
          v-model="number"
        />
        <button type="submit" class="certi">인증요청</button>
      </div>
      <div class="btn">
        <button type="submit">비밀번호찾기</button
        ><span
          >또는 <router-link to="/login">로그인</router-link>으로 돌아가기</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "findpwForm",
  data() {
    return {
      id: "",
      name: "",
      adnumber: "",
    };
  },
};
</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>
