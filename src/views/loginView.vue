

<template>
  <div class="page" >
    <form @submit.prevent="submitForm" class="form">
    <div class="box">
      <div class="id">
        <v-text-field v-model="id" ref="Id" label="UserId"></v-text-field>
      </div>
      <div class="pw">
        <v-text-field type="password" v-model="pw" ref="Pw" label="UserPassword"></v-text-field>
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
    logMessage: '',
    };
  },
 
  methods: {
    async submitForm() {
      if(this.id == "") {
        alert("아이디를 입력하세요.");
        return;
      } else if(this.pw == "") {
        alert("비밀번호를 입력하세요.");
        return;
      }
      try{
        const userData = {
          id: this.id,
          pw: this.pw,
      }
      
        console.log('로그인')
        console.log( userData )

        const { data }  = await loginUser(userData);

        alert("로그인 성공");
        console.log(data)
        this.$store.commit('setUsername', data.id);
        // 메인 페이지 이동
        this.$router.push('/');
        this.logMessage = `${data.id} 님 환영합니다.`;

      } catch (error) {
        
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.id  = '';
      this.pw  = '';
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


  
    // login() {
    //   const data = {
    //     id :'asdf',
    //     psword : 'asdf',
    //     }
    //       this.$axios
    //       .post('http://172.31.3.229:3000/api/login', data )
    //       .then((res) => {
            
    //         alert("로그인에 성공했습니다.");
    //         console.log(res);
    //         // this.$router.replace('hello');
    //       })
    //       .catch((error) => {
    //         alert("로그인에 실패했습니다. ");
    //         console.log(error);
    //       });
    //   },
        // login() {
        //   const data = {
        //     id: 'a',
        //     psword : '1',
        //   }
        //   this.$axios
        //   .post('/login', data )
        //   .then((res) => {
        //     if (this.id == "") {
        //     alert('아이디를 입력해주세요.');
        //     this.$refs.id.focus();
        //     return; 
        //   }
        //   else if (this.psword == "") {
        //     alert('비밀번호를 입력해주세요.');
        //     this.$refs.psword.focus();
        //     return;
        //   }
        //   alert("로그인에 성공했습니다. ");
        //   console.log(res);
        //   })
        //   .catch((error) =>{
        //     alert("로그인에 실패했습니다.");
        //     console.log(error);
        //   })
          
        // this.$http.post('/api/login', {user:this.user}).then((res) => {
        //   if (res.data.success == true) {
        //     alert(res.data.message);
        //     this.$router.push('/');
        //   } else {alert(res.data.message); }
        // });
//       },
//       cancel() {
//         this.$router.push('/');
//       },
//       mounted() {
//         this.$refs.id.focus();
//       }

    },
    



};

</script>

<style scoped>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>
