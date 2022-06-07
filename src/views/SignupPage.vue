<template>
  <div class="page">
    <div class="box">
      <h3>회원가입</h3>
      <div class="container">
        <div>
          <input type="name" class="name" 
          placeholder="이름" 
          v-model="signup.name" />
        </div>
        <div>
          <input 
          type="id" 
          maxlength="15" 
          id="id2" placeholder="아이디" 
          v-model="signup.id" 
          @blur="idValid" />
          <div v-if="!idValidFlag">
            유효하지 않은 아이디 입니다.
          </div>
        </div>
        <div>
          <input
            type="password"
            class="password2"
            placeholder="비밀번호"
            v-model="signup.psword"
            maxlength="15"
            @blur="passwordValid"
          />
          <div v-if="!passwordValidFlag">
            유효하지 않은 비밀번호입니다.
          </div>
        </div>
        <div>
          <input
            type="password"
            class="passwordConfirm"
            placeholder="비밀번호 확인"
            v-model="passwordCheck"
            maxlength="10"
            @blur="passwordCheckValid"
          />
          <div v-if="!passwordCheckFlag">
            비밀번호가 동일하지 않습니다.
          </div>
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
      signup: {
        name: null,
        id: null,
        psword: null,
      },
        idValidFlag: true,
        passwordValidFlag: true,
        passwordCheck:null,
        passwordCheckFlag: true,
    };
  },
  // computed: {
  //   idValid: function() {
  //     return /^[A-Za-Z0-9]$/.test(this.id);
  //   }
  // },
  methods: {
    idValid() {
      if( /^(?=.*[a-z])(?=.*[0-9]).{4,10}$/.test(this.signup.id)) {
        this.idValidFlag = true
      } else {
        this.idValidFlag = false
      }
    },
    passwordValid() {
      if (/^(?=.*[a-z])(?=.*[0-9]).{4,10}$/.test(this.signup.psword)) {
        this.passwordValidFlag = true
      } else {
        this.passwordValidFlag = false
      }
    },
    passwordCheckValid() {
      if (this.signup.psword == this.passwordCheck) {
        this.passwordCheckFlag = true
      } else {
        this.passwordCheckFlag = false
      }
    },
    SignUp() {
      if(this.signup.name ==null || this.signup.id == null || this.signup.psword == null || this.passwordCheck == null){
        alert('필수값 누락')
        return
      } if(!this.idValid || !this.passwordValidFlag || !this.passwordCheckValid) {
        alert('유효성 확인')
        return
      }
      this.$axios.post('/api/login',{
        id: this.signup.id,
        psword: this.signup.psword,
        name: this.signup.name,
      }.then(res=> {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }))
    },
  },
};
    // SignUp() {
    //   const data = {
    //     id :'',
    //     name:'',
    //     psword : '',
    //     passwordCheck : '',
    //   }
  //     this.$axios
  //       .post('http://172.31.3.229:3000/api/login', data)
  //       .then(function (response) {
  //         if (response.data.code == 200) {
  //           alert({
  //             open: true,
  //             title: "Confirm",
  //             message: "Join Success!",
  //             callback: function () {
  //               this.$router.push("/login");
  //             },
  //           });
  //         } else {
  //           let message = response.data.message;
  //           if (response.data.code == 404) {
  //             message =
  //               "User ID is duplicated. Please enter a different User ID. ";
  //           }
  //           alert({
  //             open: true,
  //             title: "Error",
  //             message: message,
  //           });
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   },

</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>