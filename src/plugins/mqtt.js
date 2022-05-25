import Vue from "vue";
import App from "./App.vue";
import mqtt from "./plugins/mqtt";

Vue.use(mqtt);

new Vue({
  render: h => h(App)
}).$mount("#app");

require("../src/mqttws31-min.js");

export default {
  install(Vue) {
    const wsbroker = "host";
    const wsport = port;
    const client = new Paho.MQTT.Client(
      wsbroker,
      Number(wsport),
      "/ws",
      "wsClient" + parseInt(Math.random() * 100, 10)
    );
    client.onConnectionLost = function(responseObject) {
      console.log("CONNECTION LOST - " + responseObject.errorMessage);
    };
    client.onMessageArrived = function(message) {
      console.log(message)
    };

    const options = {
      userName: "username",
      password: "password",
      timeout: 3,
      keepAliveInterval: 30,
      onSuccess: function() {
        console.log("CONNECTION SUCCESS3");
      },
      onFailure: function(message) {
        console.log("CONNECTION FAILURE - " + message.errorMessage);
      }
    };
    if (location.protocol == "https:") {
      options.useSSL = true;
    }
    console.log("CONNECT TO " + wsbroker + ":" + wsport);
    client.connect(options);

  }
};