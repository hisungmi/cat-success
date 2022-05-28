import Vue from "vue";
import Vuex from "vuex";
import loginStore from "@/store/modules/login.js";
// import DB from "@/mqtt.js";
// import DB from "../db.json"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // db:[]

  },
  getters: {

  },
  mutations: {
    // setDB(state, data){
    //   state.db= data;
    //}

  },
  actions: {
    // dbInit({commit}){
    //   const res = DB
    //   const data = res.data.map(d =>({
    //     // user: d.user,
    //     // genre: d.genre,
    //     // location: d.location,
    //     // size: d.size
    //     temp : d.temp,
    //     humid : d.humid
    //   }))
    //   commit('setDB',data)
    // }
  },
  modules: {
    loginStore: loginStore
  },
});
