<template>

    <div id="wrap">
      <header class="header fixed">
        <h1 class="logo">
          <a @click="goRouter('/')">
          <img style="cursor: pointer" src="../assets/logo1.png"/></a>
        </h1>
        <div class="bar">
          <ul class="main-menu">
            <li><a href="#"><router-link to="/donserve">돈사환경</router-link></a>
            <!-- <ul class="subemenu">
              <li><a href="#"><router-link to="/donserve">돈사환경</router-link></a></li>
              <li><a href="#"><router-link to="/donchart">그래프</router-link></a></li>
            </ul> -->
            </li>
            <li><a href="#">개체관리</a>
            <ul class="subemenu">
              <li><a><router-link to="/momcheak">사료무게</router-link></a></li>
              <li><a><router-link to="">모돈 확인사항</router-link></a>
                <ol class="ssubemenu">
                  <li><a><router-link to="/one">모돈 체평점</router-link></a></li>
                  <li><a><router-link to="/two">모돈 회음부</router-link></a></li>
                  <li><a><router-link to="/three">모돈 분변,분뇨</router-link></a></li>
                  <li><a><router-link to="/four">모돈 유방</router-link></a></li>
                </ol>
              </li>
            </ul>
            </li>
            <li><a href="#"><router-link to="/CCTV">CCTV</router-link></a></li>
            <!-- <li><a href="#">생산관리</a> -->
            <!-- <ul class="subemenu">
              <li><a><router-link to="/feed">사료량</router-link></a></li>
              <li><a href="#"><router-link to="/feedchart">그래프</router-link></a></li>
            </ul>
            </li>-->
            <div v-if="isUserLogin" class="sssube">
              <li ><router-link to="/Mypage" id="lg" > 마이페이지 </router-link></li>
              <li><a href="javascript:;" @click="logoutUser">로그아웃</a></li>
            </div>
            <div v-else class="sssube">
              <li><router-link to="/login" id="lg" >로그인</router-link></li>
              <li><router-link to="/SignupForm" id="lg" >회원가입</router-link></li>
            </div>
          </ul>
          
        </div>
        <div v-if="isUserLogin">
        <span class="menu-toggle-btn">
          <button v-if="menuV" @click="showMenu(false)"><span></span>
            <span></span>
            <span></span></button>
          <button  v-else @click="showMenu(true)" >
            <span></span>
            <span></span>
            <span></span>
          </button>
          </span>
          <transition name="sliding">
          <ul @click="showMenu(false)" class="slide" v-if="menuV">
            <li><a href="#"><router-link to="/donserve">돈사환경</router-link></a></li>
            <li><a><router-link to="/momcheak">사료무게</router-link></a></li>
            <li><a><router-link to="/one">모돈 확인사항</router-link></a></li>
            <li><a><router-link to="/CCTV">CCTV</router-link></a></li>
            <li><a><router-link to="/Mypage" > 마이페이지 </router-link></a></li>
            <li><a href="javascript:;" @click="logoutUser">로그아웃</a></li>
          </ul>
          </transition>
          </div>

          <div v-else>
          <span class="menu-toggle-btn">
          <button v-if="menuV" @click="showMenu(false)"><span></span>
            <span></span>
            <span></span></button>
          <button  v-else @click="showMenu(true)" >
            <span></span>
            <span></span>
            <span></span>
          </button>
          </span>
          <transition name="sliding">
          <ul @click="showMenu(false)" class="slide" v-if="menuV">
            <li><a href="#"><router-link to="/donserve">돈사환경</router-link></a></li>
            <li><a><router-link to="/momcheak">사료무게</router-link></a></li>
            <li><a><router-link to="/one">모돈 확인사항</router-link></a></li>
            <li><a><router-link to="/CCTV">CCTV</router-link></a></li>
            <li><a><router-link to="/login" >로그인</router-link></a></li>
            <li><a><router-link to="/SignupForm" >회원가입</router-link></a></li>
          </ul>
          </transition>
          </div>
       
         <!-- <slider v-if="isUserLogin" class="menu-toggle-btn" 
         :width="200" 
         type = "submit"
         direction="right" 
         :opacity="0.15" 
         :customStyles="{'navMenu': {'background-color': 'black'}, 'navIcon': {'color': '#595959'}}"
         :links="[{'id': 1, 'text': '돈사환경', 'url': '/donserve'}, {'id': 2, 'text': '개체관리', 'url': '/momcheak'},{'id': 3, 'text': '마이페이지', 'url': '/Mypage'},{'id': 4, 'text': '로그아웃', 'url': '/login'}]">
         </slider>
         <slider v-else class="menu-toggle-btn" 
         :width="200" 
         type = "submit"
         direction="right" 
         :opacity="0.15" 
         :customStyles="{'navMenu': {'background-color': 'black'}, 'navIcon': {'color': '#595959'}}"
         :links="[{'id': 1, 'text': '돈사환경', 'url': '/donserve'}, {'id': 2, 'text': '개체관리', 'url': '/momcheak'},{'id': 3, 'text': 'CCTV', 'url': '/CCTV'},{'id': 4, 'text': '로그인', 'url': '/login'}]">
         </slider> -->
      </header>
    </div>
</template>

<script src="https://unpkg.com/@jeremyhamm/vue-slider"></script>
<script>
import Slider from '@jeremyhamm/vue-slider'


export default {
  name: "headArea",
  data() {
    return{
      showSlideMenu: false,
    }
  },
  components: {
    'slider': Slider,
  },

  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    menuV(){
      return this.$store.state.ui.rightMenu.visible;
    }
  },
  // mounted(){
  //   console.log("[menu visible?]", this.$store.state.ui.rightMenu.visible)
  // },
  methods: {
    showMenu(visible) {
        this.$store.state.ui.rightMenu.visible = visible;
    },
    goRouter: function (v) {
      this.$router.push(v);
    },
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$router.push('/login');
    },
    openSlideMenu(){
      this.showSlideMenu = true;
    },
    closeSlideMenu(){
      this.showSlideMenu = false;
    }
  }
};
</script>

<style scoped>
ul{list-style:none; margin: 0;}

a {
  text-decoration: none;
  display: block;
}
.header {
    position: relative;
    padding: 25px 2%;
    height: 123px;
  }
.navMenu{
  background-color:#ceb6b6;
}
.header .logo {
  float: left;
  padding: 0;
  margin: 0;
  padding-left: 15px;
  margin-top: auto;
  margin-bottom: auto;
}

.header .logo img {
  width: 130px;
}
.header .main-menu {
  margin: 0;
  display: none;
  position: absolute;
  top: 100%;
  left: 60%;
  list-style-type: none;
  width: 100%;
  background: rgba(128, 128, 128, 0.4);
}
.main-menu .subemenu {
  margin:0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
 }
 .ssubemenu {
   margin:0;
   padding:5px;
   display: flex;
   flex-direction: column;
 }
 .sssube{
  display : flex;
  justify-content : space-evenly;
  align-items : center;
 }

.main-menu > li> a {
  /* text-align: center; */
  text-decoration: none;
  display: block;
  padding: 20px 0 20px 10px;
  font-size: 12px;
  color: rgb(255, 255, 255);
  letter-spacing: 0.05em;
}
#lg{
  float: right;
}
.subemenu{
     position: fixed;
     display: flex;
     background: rgb(255, 208, 208);
     opacity: 0;
     visibility: hidden;
 }
 .subemenu > li{
     /* padding: 14px; */
     border-bottom: 1px solid rgb(0, 0, 0);
 }
 .subemenu > li > a{
     display: block;
     font-size: 15px;
     /* padding: 5px; */
     color:rgb(0, 0, 0);
     text-decoration: none;
    border-bottom: 1px solid rgb(0, 0, 0);
 }
 .subemenu >ol >li {
   font-size: 10px;
 }
 .ssubemenu >li >a {
   display: block;
   font-size: 10px;
 }
 .subemenu > li > a:hover{
     background-color: #ceb6b6;    
  }
 .main-menu >li:hover .subemenu {
     opacity: 1;
     visibility: visible;
 }
.header .menu-toggle-btn {
  float: right;
  width: 40px;
  padding-top: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  
}
.slide{
    list-style: none;
    margin: 0;
    float: right;
    width: 145px;
    padding-top: 38px;
    height: 290px;
    background-color: silver;
    display: flex;
    flex-direction: column;
}

.slide li {
  display: flex;
  margin: 10px;
}
.slide li a{
  display: block;
  text-decoration: none;
  color: black;
}
.sliding-enter {
  transform: translateX(200px);
}
.sliding-enter-active {
  transition: transform 0.5s ease;
}
.sliding-enter-to {
  transform: translateX(0%);
}

 .sliding-leave {
  transform: translateX(0%);
  transform: translateX(200px);
}
.sliding-leave-active {
  transition: transform 0.5s ease;
}
.sliding-leave-to {
  transform: translateX(200px);
}

.header .menu-toggle-btn span {
  display: block;
  width: 100%;
  height: 3px;
  background: #000;
}
.header .menu-toggle-btn span:nth-child(2) {
  margin: 7px 0;
}

@media all and (min-width: 600px) {
  .header {
    display: grid;
    grid-template-columns: 30% 70%;
    padding: 0px;
    height: auto;
    margin-top: auto;
    margin-bottom: auto;
    background: #ffdfdf;
  }
  .header .logo {
    padding: 10px 20px;
    padding-left: 30px;
  }
  .header .logo img {
    width: 180px;
  }
  .header nav {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    margin-right: 0px;
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
  }
  .header .main-menu   {
    /* !important 없으면 btn 접었을 시 display:none되어 gnb가 표시되지 않음 */
    display: grid !important;
    display: block;
    height: 100%;
    grid-template-columns: 20% 20% 20% 40% ;
    position: static;
    width: auto;
    background: none;
  }

  .header .main-menu li {
    float: left;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
    margin-right: 10px;
    border-bottom: 0;
  }
  .header .main-menu li a {
    color: rgb(0, 0, 0);
    padding: 0;
    font-size: 18px;
  }
  .header .menu-toggle-btn {
    display: none;
  }
  .menu-toggle-btn span:hover {
  opacity:1;
  visibility: visible;
}
.slide{
  display:none;
}
}


@media all and (min-width: 1000px) {
  .header {
    grid-template-columns: 20% 80%;
  }
  
  .header .logo {
    padding: 10px 20px;
    padding-left: 30px;
  }
  .header .main-menu li a {
    font-size: 20px;
  }
}
</style>
