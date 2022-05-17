
<template>
  <div class="page">
    <div class="box">
      <!-- <div class="ad-num">
        <v-text-field v-model="adnum" label="ad-number"></v-text-field>
      </div> -->
      <div class="id">
        <v-text-field v-model="id" label="UserId"></v-text-field>
      </div>
      <!-- <div class="id">
        <v-text-field v-model="id" label="Username"></v-text-field>
      </div> -->
      <div class="pw">
        <v-text-field v-model="psword" label="UserPassword"></v-text-field>
      </div>
      <!-- <div class="type">
        <v-text-field v-model="userType" label="ADM"></v-text-field>
      </div> -->
    </div>
    <div class="caption">
      <!-- <router-link to="/findidForm"> 아이디찾기</router-link>
      <router-link to="/findpwForm"> 비밀번호찾기</router-link> -->
      <router-link to="/SignupForm"> 회원가입 </router-link>
    </div>
    <div class="btn">
      <button type="submit" @click="login()">로그인</button>
    </div>
  </div>
  <!-- <div id="Login">
  <section>
    <article id="login_container">
      <div class="form_area">
        <form id="login_form" v-on:submit.prevent="loginSubmit">
        <div class="label">
        	로그인
        </div>
        <div>
          <input id="user_id" class="login_input" type="text" placeholder="ID" />
          <input id="user_pwd" class="login_input" type="password" placeholder="Password" />
        </div>
        <button class="btn_small" type="button">회원가입</button>
        <div>
        	<button id="login_btn" class="btn" type="submit">로그인</button>
        </div>
        </form>
      </div>
	</article>
    <article id="register_container">
      <div class="register_box">
        <form id="register_form">
          <div class="label">회원가입</div>
          <div>
            <input id="register_id" class="login_input" type="text" placeholder="ID" />
            <input id="register_pwd" class="login_input" type="password" placeholder="Password" />
            <select id="user_role">
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <button class="btn_small" type="button">취소</button>
          </div>
          <div>
          <button class="btn" type="submit">회원가입</button>
          </div>
        </form>
      </div>
    </article>
  </section>
</div> -->
</template>

<script>

export default {
  name: "loginView",
  data: () => {
    return {
    id : '', 
    psword: '', 
    }
  },
 
  methods: {
    login() {
      const data = {
        id :'',
        psword : '',
        }
          this.$axios
          .post('http://172.31.3.229:3000/api/login', data )
          .then((res) => {
            console.log(res);
            // this.$router.replace('hello');
          })
          .catch((error) => {
            console.log(error);
          });
      },
      login() {
        if (this.user.id == '') {alert('아이디를 입력해주세요.'); return;}
        if (this.user.psword == '') {alert('비밀번호를 입력해주세요.'); return;}
        this.$http.post('/api/login', {user:this.user}).then((res) => {
          if (res.data.success == true) {
            alert(res.data.message);
            this.$router.push('/');
          } else {alert(res.data.message); }
        });
      }
    },
};

  //  data() {
  //   return {
  //     user_id: "",
  //     user_pwd: "",
  //     isLogin: true,
  //     isRegister: false,
  //     register_id: "",
  //     register_pwd: "",
  //     register_role: "Admin"
  //   };
  // },
  // methods: {
  //   loginSubmit: function() {
  //     console.log("로그인");
  //     this.$router.push("/");
  //   },
  //   login: function() {
  //     this.isLogin = true;
  //     this.isRegister = false;
  //   },
  //   register: function() {
  //     this.isLogin = false;
  //     this.isRegister = true;
  //   },
  //   registerSubmit: function() {
  //     console.log("회원가입 완료");
  //     this.login();
  //   },
  //   registBtn: function() {
  //     console.log("회원가입");
  //     this.register();
  //   },
  //   cancelBtn: function() {
  //     this.login();
  //   }
  // }

</script>

<style scoped>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>
