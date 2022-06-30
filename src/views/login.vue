<template >
<body>
<div class="app" >
  <div v-if="state.account.id" >
    <p id="a">안녕! 나는 {{ state.account.name }}!!<br> 로그인기능.  </p>
    <button @click="logout()">로그아웃</button>
    </div>
  <div v-else >
    <h2 id ="b" align="center">Login</h2>
    <label for="loginId" >
      <input type="text" id="loginId" v-model="state.form.loginId" />
      <span >ID</span><br>
    </label>
    <label for="loginPw">
      <input type="password" id="loginPw" v-model="state.form.loginPw" />
      <span>Password</span>
    </label>
    <br>
    <button @click="submit()">Login</button>
    <div class="caption">
      <a href="">Forgot Password?</a>
    </div>
  </div>
</div>
</body>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      account:{
        id:null,
        name: "",
      },
      form:{
        loginId:"",
        loginPw:"",
      },
    });
    const submit = () => {
      const args = {
       loginId: state.form.loginId,
       loginPw: state.form.loginPw,
      };

      axios.post("/api/account", args ).then((res) => {
        alert("로그인에 성공했습니다.");
        state.account = res.data;
      }).catch(() => {
        alert("로그인에 실패했습니다. 계정정보를 확인해주세요.");
      });
    };

    const logout = () =>{
      axios.delete("/api/account").then(()=>{
      alert("로그아웃 하였습니다.");
      state.account.id = null;
      state.account.name = "";
      });
    };

    axios.get("/api/account").then((res)=>{
      state.account = res.data ;
    });

    return{ state , submit, logout };
   },
  };

</script>

<style>
*{margin: 0; padding: 0; box-sizing: border-box;}

body{
  font-family: 'Noto Sans KR';
  display : flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#a{
  border-radius: 30px 30px 30px 0;
  border:7px
  solid #632C9C;
  padding: 0.5em 0.6em;
  color: black;
}

#loginId{
  width: 100px
}
#loginPw{
  width: 100px
}
/* div{
  background: linear-gradient(to right, #a3e0ff, #5673bd);
} */
</style>