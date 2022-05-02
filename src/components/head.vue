<template>
  <body>
    <div id="wrap">
      <header class="header fixed">
        <h1 class="logo">
          <a @click="goRouter('/')"
            ><img style="cursor: pointer" id="img" src="../assets/logo1.png"
          /></a>
        </h1>
        <nav>
          <ul class="gnb">
            <li><a>돈사환경</a></li>
            <li><a>개체관리</a></li>
            <li><a>생산관리</a></li>
            <li><a>꿀사란</a></li>
            <li>
              <a><router-link to="/login" id="lg">로그인</router-link></a>
            </li>
          </ul>
        </nav>
        <span class="menu-toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </header>
    </div>
  </body>
</template>

<script>
export default {
  name: "headArea",
  data() {
    return {};
  },
  methods: {
    goRouter: function (v) {
      this.$router.push(v);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.header {
  position: relative;
  padding: 18px 2%;
  height: 50px;
}

.header .logo {
  float: left;
  padding: 0;
  margin: 0;
  padding-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
}

.header .logo img {
  width: 130px;
}
.header .gnb {
  margin: 0;
  display: none;
  position: absolute;
  top: 100%;
  left: 60%;
  list-style-type: none;
  width: 100%;
  background: rgba(128, 128, 128, 0.4);
}
.header .gnb li a {
  display: block;
  padding: 20px 0 20px 10px;
  font-size: 12px;
  color: rgb(255, 255, 255);
}
.header .menu-toggle-btn {
  float: right;
  width: 40px;
  padding-top: 10px;
  cursor: pointer;
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
  .header .gnb {
    /* !important 없으면 btn 접었을 시 display:none되어 gnb가 표시되지 않음 */
    display: grid !important;
    display: block;
    height: 100%;
    grid-template-columns: 15% 15% 15% 15% 15% 15%;
    position: static;
    width: auto;
    background: none;
  }
  .header .gnb li {
    float: left;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
    margin-right: 10px;
    border-bottom: 0;
  }
  .header .gnb li a {
    color: rgb(0, 0, 0);
    padding: 0;
    font-size: 18px;
  }
  .header .menu-toggle-btn {
    display: none;
  }
}

@media all and (min-width: 1132px) {
  .header {
    grid-template-columns: 20% 80%;
  }
  .header .logo {
    padding: 10px 20px;
    padding-left: 40px;
  }
  .header .gnb li a {
    font-size: 20px;
  }
}
</style>
