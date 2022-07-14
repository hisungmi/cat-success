<template>
  <div class="page" >
    <div  class="btn" v-if="isUserLogin" >
      <p>{{  logMessage  }}</p>
      <button  @click="goRouter('/')">홈으로</button>
    </div>
    <form v-else @submit.prevent="submitForm" class="form">
    <div class="box">
      <h3>로그인</h3>
      <div class="id">
        <v-text-field  v-model="name" ref="Name" label="Name"></v-text-field>
      </div>
      <div class="id">
        <v-text-field  v-model="id" ref="Id" label="Id"></v-text-field>
      </div>
      <div class="pw">
        <v-text-field type="password" v-model="pw" ref="Pw" label="Password"></v-text-field>
      </div>
    </div>
    <div class="caption">
      <router-link to="/SignupForm"> 회원가입 </router-link>
    </div>
    <div class="btn">
      <button type="submit"  > 로그인 </button>
      <button @click.prevent="cancel()">취소</button>
    </div>
    </form>
  </div>
</template>
<!-- @click="login()" -->
<script>
import { loginUser } from '@/api/index.js';

export default {  
  name: "loginView",
  data() {
    return {
    id : '', 
    pw: '',
    name: '',
    logMessage: '',
    };
  },
 computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    async submitForm() {
      if(this.id === "") {
        alert("아이디를 입력하세요.");
        return;
      } else if(this.pw === "") {
        alert("비밀번호를 입력하세요.");
        return;
      } else if(this.name === "") {
        alert("이름을 입력하세요.");
        return;
      }

      try{
        const userData = {
          id: this.id,
          pw: this.pw,
          name: this.name,
      }
        console.log('로그인')
        console.log( userData )

        const { data }  = await loginUser(userData);

        console.log(data)
                
      if(data.message === '로그인 실패'  ) {
        alert("로그인 실패.");
        return;
      } else if(data.message === '로그인 성공'){
        alert("로그인 성공.");
        // this.$router.push('/');
        // 메인 페이지 이동
        
        this.$store.commit('setUserid', userData.id);
        this.$store.commit('setUsername', userData.name);
        this.logMessage = `관리자 ${userData.name} 님 환영합니다.`;
        return;
      }
      } catch (error) {
        console.log("Error!");
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.id  = '';
      this.pw  = '';
      this.name = '';
    },

    goRouter: function (v) {
      this.$router.push(v);
    },
  
    
    // login() {
     
    //   const data = {id: this.id, pw: this.pw }
    //   // data = JSON.stringify(data);

    //   console.log("로그인");
    //   console.log(data);

    //   this.$axios.post("http://3.37.9.131:4000/User2/Login", data)
    //   .then((res) => {
    //     alert("로그인 성공")
    //     console.log(res.data);
    //     // this.$router.push("/")
    //   }).catch((err) => {
    //     alert("로그인 실패");
    //     console.log(err);
    //   });
    // },
  }
};

</script>

<style scoped>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>
