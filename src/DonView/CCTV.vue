<template>
    <div class="wrap">
    <h1>CCTV</h1>
    <div class="sidebar">
        <ul>
          <li><a href="#"><router-link to="/donserve">돈사환경</router-link></a></li>
          <li><a href="#"><router-link to="/donchart">그래프</router-link></a></li>
          <li><a href="#"><router-link to="/CCTV">CCTV</router-link></a></li>
        </ul>  
    </div>
    <div class="content">
    <body>
         <!-- <img src="http://172.20.10.5:8091/?action=stream" width="500px" height="300px">
         </img> -->
    </body>
    </div>    
    <div class="footer">
        성미 010-7777-8888
    </div>
</div>
</template>

<script>
export default {
    name: "CCTV",

}
</script>

<style>

@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>