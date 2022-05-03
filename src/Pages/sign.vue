<template>
  <div class="page">
    <div class="box">
      <h3>회원가입</h3>
      <div class="container">
        <div>
          <input type="name" class="name" placeholder="이름" v-model="name" />
        </div>
        <div>
          <input type="id" id="id2" placeholder="아이디" v-model="id" />
          <button class="cheak">
            중복확인
          </button>
        </div>
        <div>
          <input
            type="password"
            class="password2"
            placeholder="비밀번호"
            v-model="password"
          />
        </div>
        <div>
          <input
            type="password"
            class="passwordConfirm"
            placeholder="비밀번호 확인"
            v-model="passwordConfirm"
          />
        </div>
        <div>
          <input
            type="text"
            class="number"
            maxlength="11"
            placeholder="번호 -를 제외하고 입력해주세요."
            v-model="number"
          />
          <button type="submit" class="certi">인증요청</button>
        </div>
        <div class="btn">
          <button type="submit" @click="SignUp()">가입하기</button>
          <span
            >또는 <router-link to="/login">로그인</router-link>으로
            돌아가기</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      name: "",
      id: "",
      password: "",
      passwordConfirm: "",
      number: "",
      msg: "가입.",
    };
  },
  methods: {
    SignUp() {
      this.$axios
        .post("", {
          name: "",
          id: "",
          password: "",
          passwordConfirm: "",
          number: "",
        })
        .then(function (response) {
          if (response.data.code == 0) {
            alert({
              open: true,
              title: "Confirm",
              message: "Join Success!",
              callback: function () {
                this.$router.push("/login");
              },
            });
          } else {
            let message = response.data.message;
            if (response.data.code == 10000) {
              message =
                "User ID is duplicated. Please enter a different User ID. ";
            }
            alert({
              open: true,
              title: "Error",
              message: message,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>
