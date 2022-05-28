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
            <li><a>{{ db.temp }}</a></li>
            <li><a>{{ db.humid }}</a></li>
            <li><a> 가스량 </a></li>   
        </ul>       
    </nav>
    <nav id="nav1">
        <ul>
            <li><a>사료량</a></li>
            <li><a>알림현황</a></li>   
        </ul>       
    </nav>

</div>
</body>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
<script>
import App from '@/App.vue'
import mqttws31 from '@/plugins/mqttws31'
import mqttws31min from '@/plugins/mqttws31-min'


var mqttClient= null;
var mqtt_host = "broker.hivemq.com";
var mqtt_port = "8000";
var mqtt_clientId = "clientID-" + parseInt(Math.random() * 100);        // 랜덤 클라이언트 ID 
var mqtt_topic = "test/hello";

// import{ mapActions, mapState } from 'vuex'
export default {
  components: { App, mqttws31, mqttws31min },
  data() {
      return{
        db:[]
      };
  },
//   created: {
//     //   this.data = Json.parse(data);
//     //   myFunction: function() {
//     //       this.db = JSON.parse(this.dat);
//     //       console.log(this.db);
//     //   }
//   },
  mounted() {
    //   this.init();
    this.fncStartMqtt();
  },
//   computed: {
//     //   mapState({
//     //       data: 'db'
//     //   })
//   },
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
        
      }

    //   mapActions({
    //       init: 'dbInit'
    //   });
     
  }
};
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
#nav ul li a {
  display: flex;
  align-items: center;
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
#nav1 ul li a {
  display: flex;
  align-items: center;
}
</style>