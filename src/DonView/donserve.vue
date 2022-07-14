<template>
  <div class="wrap">
    <h1>돈사환경</h1>
    <div class="sidebar">
        <ul class="sidemenu">
          <li><a href="#"><router-link to="/donserve">돈사환경</router-link></a></li>
          <li><a href="#"><router-link to="/donchart">그래프</router-link></a></li>
        </ul>  
    </div>
    <div>
      <body>
        
      <table>
        <thead class="tr">
          <tr >
            <th> </th>
            <th>날짜</th>
            <th>온도</th>
            <th>습도</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tr">
          <td> </td>
          <td>{{ new Date() | moment('YYYY-MM-DD') }}</td>
          <td>{{ db.temp }}</td>
          <td>{{ db.humid }}</td>
          </tr>
        </tbody>
      </table>
      </body>
    </div>    
    <div class="footer">
        성미 010-7777-8888
    </div>
</div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
<script>
// import Table from '../components/Dth.vue';
import home from '../views/Home.vue';
import mqttws31 from '@/plugins/mqttws31'
import mqttws31min from '@/plugins/mqttws31-min'

var mqttClient= null;
var mqtt_host = "broker.hivemq.com";
var mqtt_port = "8000";
var mqtt_clientId = "clientID-" + parseInt(Math.random() * 100);        // 랜덤 클라이언트 ID 
var mqtt_topic = "SMT_IT/CCIT/SENSOR/TEMP";

export default {
    name: "donserve",
    componrnts: {
        // Table,
        home, mqttws31, mqttws31min
    },
 
    data() {
      return {
        db:[],
        dbtemp:null,
        dbhumid:null,
      }
    },
    mounted() {
    //   this.init();
    this.fncStartMqtt();
    //  setInterval(() => {
    //   if (this.x < 100) this.x += 5;
    // }, 1000);
    let isLogin = this.$store.getters.isLogin;
    console.log(isLogin);

    if (!isLogin) { 
        alert('로그인 후 이용하세요.');
        this.$router.push('/login');
    }
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
      },

    //   mapActions({
    //       init: 'dbInit'
    //   });     
  },

}
</script>

<style scoped> 
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\don.scss";
</style>