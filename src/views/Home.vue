<template>
<body>
<div id="wrap">
    <header id="header">
        <h1 class="main">
          <a><img style="cursor: pointer" id="img" src="../assets/home1.png"/></a>
        </h1>
    </header>
    <nav id="nav">
        <ul>
            <li>{{Temperature}} </li>
            <li>{{Humidity}}</li>
            <li>{{gas}}</li>   
        </ul>       
    </nav>
    <nav id="nav1">
        <ul>
            <li>{{feed}}</li>
            <li>{{Notification}}</li>   
        </ul>       
    </nav>

</div>
</body>
</template>

<script>
    

import App from '@/App.vue'
export default {
  components: { App, },
  data() {
      return{
          Temperature:'온도데이터',
          Humidity:'습도데이터',
          gas:'가스량',
          feed:'사료량 그래프',
          Notification:'실시간 알림현황'
      }
  },

  
}
</script>

<style scoped>
body{
    background-color: rgb(253, 201, 201);
}
img{
  width:100%;
}

#nav ul {
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 100px;
    z-index: 1;
}
#nav ul li {
    background:rgb(255, 220, 220);
    margin:auto;
    display:inline-flex;
    width: 200px;
    height: 200px;
    border-radius: 50px;
}
#nav1 ul {
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 80px;
    z-index: 2;
}
#nav1 ul li{
    background:rgb(255, 220, 220);
    margin:auto;
    display:inline-flex;
    width: 400px;
    height: 300px;
    border-radius: 50px;
}
</style>