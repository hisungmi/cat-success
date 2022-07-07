import Vue from "vue";
import Vuex from "vuex";
// import loginStore from "@/store/modules/login.js";
// import DB from "@/mqtt.js";
// import DB from "../db.json"

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  state: {
    // db:[]
    id: '',
  },
  getters: {
    isLogin(state) {
      return state.id != '';
    },
    
  },
  mutations: {
    setUsername(state, id) {
      state.id = id;
    },
    clearUsername(state) {
      state.id = '';
    },
  },
  actions: {

  },
  modules: {
    // loginStore: loginStore
  },
});
