<template>
  <div class="page">
    <div class="box">
      <h3>회원가입</h3>
      <div class="container">
        <form v-on:submit.prevent="SignUp">
        <div>
          <input type="name" class="name" 
          placeholder="이름" 
          v-model="name" />
        </div>
        <div>
          <input 
          type="id" 
          maxlength="15" 
          id="id2" placeholder="아이디" 
          v-model="id"
          ref="cursor"
          @focus="checkFlag = false"
          @blur="idValid" />
          <span v-if="!idValidFlag">
            유효하지 않은 아이디 입니다.
          </span>
          <!-- <span class="error" v-if="checkFlag && !id">아이디를 입력하세요</span> -->
          <span v-if="!availableid">이미 사용중인 아이디입니다.</span>
        </div>
        <div>
          <input
            type="password"
            class="password2"
            placeholder="비밀번호"
            v-model="pw"
            maxlength="15"
            ref="cursor2"
            @focus="checkFlag = false"
            @blur="passwordValid"
          />
          <span v-if="!passwordValidFlag">
            유효하지 않은 비밀번호입니다.
          </span>
          <!-- <span class="error" v-if="checkFlag && !pw">비밀번호를 입력하세요</span> -->
        </div>
        <!-- <div>
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
        </div> -->
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
          <button type="submit">가입하기</button>
          <span class="caption1"
            >또는 <router-link to="/login">로그인</router-link>으로 돌아가기</span>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>
<!-- @click="SignUp()" -->
<script>
import { registerUser } from '@/api/index.js';
import { loginUser } from '@/api/index.js';

export default {
  name: "SignupForm",
  data() {
    return {
        id: '',
        pw: '',
        name: '',
        availableid: true,
        idValidFlag: true,
        passwordValidFlag: true,
        // passwordCheck:null,
        passwordCheckFlag: true,
        checkFlag: false,
    };
  },
  // mounted() {
  //   this.startCursor();
  // },
  methods: {
    // startCursor() {
    //   this.$refs.cursor.focus();
    // },
    async idValid() {
      if( /^(?=.*[a-z])(?=.*[0-9]).{4,10}$/.test(this.id)) {
        this.idValidFlag = true
      } else {
        this.idValidFlag = false
        return;
      }
      // const response = await loginUser(this.id);

      //     if ( this.id == response.userData.id) {
      //       this.availableid = false;

      //     } else {
      //       this.availableid = true;
      //     }
    },

    passwordValid() {
      if (/^(?=.*[a-z])(?=.*[0-9]).{4,10}$/.test(this.pw)) {
        this.passwordValidFlag = true
      } else {
        this.passwordValidFlag = false
      }
    },

    // passwordCheckValid() {
    //   if (this.signup.pw == this.passwordCheck) {
    //     this.passwordCheckFlag = true
    //   } else {
    //     this.passwordCheckFlag = false
    //   }
    // },
    // async idValid() {
    // },

    isEmpty(data) {
      if (data ==="" || data === null) {
        return true;
      } else {
        return false;
      }
    },
    sign() {
      this.checkFlag = true;
          if(!this.isEmpty(this.id) && !this.isEmpty(this.pw)){
          }
    },

    async SignUp() {
    try{
	    const userData = {
          id : this.id,
          pw : this.pw,
          name : this.name,
          // name:this.signup.name,
          // passwordCheck : this.passwordCheck,
        }
        if (this.name === "") {
          window.alert("이름을 입력하세요");
          return ;
        }
        if (this.id === "") {
          window.alert("아이디를 입력하세요");
          return ;
        }
        if (this.pw === "" ) {
          window.alert("비밀번호를 입력하세요.");
          return ;
        }
        if (this.idValidFlag === false){
          window.alert("아이디를 다시 입력해주세요.");
          return ;
        }
        if (this.passwordValidFlag === false) {
          window.alert("비밀번호를 다시 입력하세요.");
          return ;
        }
        if(this.id == this.pw){
          window.alert("아이디와 비번은 같을 수 없습니다.")
          return ;
        }
        if(this.id == null || this.pw == null){
          window.alert('필수값 누락')
          return ;
        }
        if(!this.idValidFlag || !this.passwordValidFlag) {
          window.alert('유효성 확인')
          return ;
        }
          const { data } = await registerUser(userData);

          console.log("회원가입");
          console.log(userData)
          console.log(data)

        if( data.message === '회원가입 실패' ) {
          alert("회원가입 실패.");
          return ;
        } else if(data.message === '회원가입 성공'){
          alert("회원가입 성공.");
          this.$store.commit('setUsername', userData.name);
          // console.log(userData.name);
          // console.log(this.$store.state.name);
          this.$router.push('/login');
          return;
        }
          // this.logMessage = `${this.userData.id}님이 가입되었습니다.`;
        } catch (error){

          console.log("Error!");

        } finally {
          this.initForm();
        }
      // this.$router.push('/login');
      //template literal(백틱문법) 자바스크립변수를 문자열과 합침
  },
  

  initForm() {
    this.id='';
    this.pw = '';
    this.name ='';
  },

  
    //validation 생략
      // if(this.signup.name ==null || this.signup.id == null || this.signup.pw == null || this.passwordCheck == null){
      //   alert('필수값 누락')
      //   return
      // } if(!this.idValid || !this.passwordValidFlag || !this.passwordCheckValid) {
      //   alert('유효성 확인')
      //   return
      // }

      // this.$axios
      //   .post('http://3.37.9.131:3000/User2/Register', {id: this.signup.id, pw: this.signup.pw, name: this.signup.name, pwcheack})
      //   .then(function (response) {
      //     if (response.data.code == 200) {
      //       alert('환영합니다');
      //       this.$router.push("/login");
      //     } else {
      //       let message = response.data.message;
      //       if (response.data.code == 404) {
      //         message =
      //           "실패야";
      //       }
      //       alert({
      //         open: true,
      //         title: "Error",
      //         message: message,
      //       });
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      // console.log("회원가입");
      // console.log(data);

      // this.$axios.post('http://3.37.9.131:3000/User2/Register',data )
      // .then(res=> {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
    
  },
};


// {
//         id: this.signup.id,
//         psword: this.signup.psword,
//         name: this.signup.name,
//       }
</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>