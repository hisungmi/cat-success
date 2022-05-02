import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
    import(/* webpackChunkName: "about" */ "../Pages/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../Pages/loginView.vue"),
  },
  {
    path: "/SignupForm",
    name: "SignupForm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../Pages/sign.vue"),
  },
  {
    path: "/findidForm",
    name: "findidForm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../Pages/findid.vue"),
  },
  {
    path: "/findpwForm",
    name: "findpwForm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../Pages/findpw.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
