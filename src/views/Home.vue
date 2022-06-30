<template>
<body>
<div id="wrap">
    <header id="header">
        <h1 class="main">
          <a><img style="cursor: pointer" id="img" src="../assets/home1.png"/></a>
        </h1>
    </header>
    <!-- <span class="username">{{ $store.state.username }}</span> -->
    <!-- <donserve :dbchild="db"></donserve> -->
    <nav id="nav">
        <ul>
            <li><a><v-gauge
            unit="℃"
            :width="width"
            :min="0"  
            :max="100"  
            :value="dbtemp" 
            :options="options" /></a>
            </li>
            <li><a><v-gauge 
            unit="%"       
            :width="width" 
            :min="0" 
            :max="100"  
            :value="dbhumid" 
            :options="options" /></a>
            </li>
            <li><a>{{ dbgas }}</a></li>
        </ul>       
    </nav>
    <nav id="nav1">
        <div>
          <h3>사료량</h3>
          <ul>
            <li>적다.</li>
            <li>많다.</li>
          </ul>
        </div>
        <div>
          <h3>알림현황</h3>
          <ul>
            <li>
              2022.06.04 14:22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;알림떴다.
            </li>
            <li>
              2022.06.04 18:40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;알림떴다.
            </li>
            <li>
              2022.06.05 12:20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;알림떴다.
            </li>
          </ul>
        </div>       
    </nav>

</div>
</body>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
<script>
import App from '@/App.vue'
import donserve from '@/DonView/donserve.vue'
// import {mapState} from 'vuex';
import mqttws31 from '@/plugins/mqttws31'
import mqttws31min from '@/plugins/mqttws31-min'
import VGauge from "vgauge";
import Gauge from '@chrisheanan/vue-gauge';

var mqttClient= null;
var mqtt_host = "broker.hivemq.com";
var mqtt_port = "8000";
var mqtt_clientId = "clientID-" + parseInt(Math.random() * 100);        // 랜덤 클라이언트 ID 
var mqtt_topic = "SMT_IT/CCIT/SENSOR/TEMP";
// var mqtt_topic = "SMT_IT/CCIT/SENSOR/GAS";

// import{ mapActions, mapState } from 'vuex'
export default {
  components: { App, donserve, mqttws31, mqttws31min, VGauge, Gauge},

  data() {
      return{
        db:[],
        dbtemp:null,
        dbhumid:null, 
        dbgas:null,
        
      width: "300px",
      options: {
        pointer: {
          length: 0.4,
          strokeWidth: 0.035,
          color: "#000000"
        },
        
        limitMax: 100,
        limitMin: 0,
        colorStop: "#FF9CC2",
        strokeColor: "#D75F8A",
        generateGradient: true,
        highDpiSupport: true
      },

      };
  },
  // computed: {
  //   ...mapState({
  //     db: state => state.db
      
  //   })
  // },

  mounted() {
    //   this.init();
    this.fncStartMqtt();
    //  setInterval(() => {
    //   if (this.x < 100) this.x += 5;
    // }, 1000);
  },
  methods: {
       fncStartMqtt: function ()
      {
        mqttClient = new Paho.MQTT.Client(mqtt_host, Number(mqtt_port), mqtt_clientId);
    
        mqttClient.onConnectionLost = this.onConnectionLost;
        mqttClient.onMessageArrived = this.onMessageArrived;
    
        mqttClient.connect({
            onSuccess : this.onConnect
            ,onFailure : this.onFailure
        });
      },
      onConnect: function ()
      {
        console.log("connet : onConnect..");
     
        mqttClient.subscribe(mqtt_topic);   
      },
      onFailure: function ()
      {
        console.log("connet : onFailure..");
      },
      
      onConnectionLost: function(responseObject)
      {
        console.log("onConnectionLost : " + responseObject.errorMessage);
        this.db = responseObject.errorMessage
      },

      onMessageArrived: function(message)
      {
        console.log("onMessageArrived : " + message.payloadString);
        this.db = JSON.parse(message.payloadString);
        this.dbtemp = this.db.temp;
        this.dbhumid = this.db.humid;
        this.dbgas = this.db.gas;
      },

    //   mapActions({
    //       init: 'dbInit'
    //   });     
  },
};
</script>

<style scoped>
body{
    background-color: rgb(253, 201, 201);
}
img{
  width:100%;
}
@media all and (min-width: 600px){
#nav ul {
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    justify-content: center;
    position: relative;
    /* bottom: 100px; */
    z-index: 1;
}

#nav ul li {
    /* background:rgb(255, 220, 220); */
    margin:auto;
    display:inline-flex;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50px;
}
#nav ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 100px;
}
.gauge-title {
  display: flex;
  justify-content: center;
}
#nav1 {
    margin:90px;
    padding:0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    /* position: relative; */
    /* bottom: 10px; */
    /* z-index: 2; */
}
#nav1 h3 {
    display: flex;
    justify-content: center;
}
#nav1 ul {
    background:rgb(255, 220, 220);
    margin:auto;
    display:block;
    width: 400px;
    height: 300px;
    border-radius: 50px;
}
#nav1 ul li {
  display: flex;
  justify-content: center;
  margin: 10px;
}

}
@media all and (max-width: 600px){
  img{
    display: none;
  }
#nav ul {
    list-style: none;
    position: relative;
    z-index: 1;
}
#nav ul li {
    margin:40px 0;
    display:flex;
    justify-content: center;
}
#nav ul li a {
  display: flex;
  align-items: center;
  font-size: 20px;
}

#nav1 h3{
  display: flex;
  justify-content: center;
}
#nav1 ul{
    background:rgb(255, 220, 220);
    margin:auto;
    display:block;

    width: 300px;
    height: 200px;
    border-radius: 40px;
}
#nav1 ul li {
  display: flex;
  justify-content: center;
  margin: 10px;
}
}
</style>