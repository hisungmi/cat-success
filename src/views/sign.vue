<template>
  <div class="page">
    <div class="box">
      <h3>회원가입</h3>
      <div class="container">
        <div>
          <input type="id" id="id2" placeholder="아이디" v-model="id" />
        </div>
        <div>
          <input type="name" class="name" placeholder="이름" v-model="name" />
        </div>
        <div>
          <input
            type="password"
            class="password2"
            placeholder="비밀번호"
            v-model="psword"
          />
        </div>
        <div>
          <input
            type="password"
            class="passwordConfirm"
            placeholder="비밀번호 확인"
            v-model="confirmpsword"
          />
        </div>
        <!-- <div>
          <input
            type="text"
            class="adnumber"
            maxlength="11"
            placeholder="관리자번호"
            v-model="adnumber"
          />
          <button type="submit" class="certi">인증요청</button>
        </div> -->
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
      psword: "",
      confirmpsword: "",
    };
  },
  methods: {
    SignUp() {
      const data = {
        id :'',
        name:'',
        psword : '',
        confirmpsword : '',
      }
      this.$axios
        .post('http://172.31.3.229:3000/api/login', data)
        .then(function (response) {
          if (response.data.code == 200) {
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
            if (response.data.code == 404) {
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
