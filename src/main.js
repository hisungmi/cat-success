import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import store from '@/store/index';
import axios from "axios";
import vuetify from './plugins/vuetify'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
// axios.defaults.baseURL = '/api'



new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
