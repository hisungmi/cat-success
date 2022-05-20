import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/loginView.vue"),
  },
  {
    path: "/SignupForm",
    name: "SignupForm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignupPage.vue"),
  },
  {
    path: "/findidForm",
    name: "findidForm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/findid.vue"),
  },
  {
    path: "/findpwForm",
    name: "findpwForm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/findpw.vue"),
  },
  {
    path: "/donserve",
    name: "donserve",
    component: () =>
      import(/* webpackChunkName: "about" */ "../DonView/donserve.vue"),
  },
    {
    path: "/donchart",
    name: "donchart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../DonView/donchart.vue"),
  },
  {
    path: "/CCTV",
    name: "CCTV",
    component: () =>
      import(/* webpackChunkName: "about" */ "../DonView/CCTV.vue"),
  },
  {
    path: "/momcheak",
    name: "momcheak",
    component: () =>
      import(/* webpackChunkName: "about" */ "../MomView/momcheak.vue"),
  },
  {
    path: "/cheak",
    name: "chaek",
    component: () =>
      import(/* webpackChunkName: "about" */ "../MomView/cheak.vue"),
  },
  {
    path: "/feedchart",
    name: "feedchart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../ProductView/feedchart.vue"),
  },
  {
    path: "/feed",
    name: "feed",
    component: () =>
      import(/* webpackChunkName: "about" */ "../ProductView/feedWeight.vue"),
  },
  {
    path: "/one",
    name: "one",
    component: () =>
      import(/* webpackChunkName: "about" */ "../cheak/one.vue"),
  },
  {
    path: "/two",
    name: "two",
    component: () =>
      import(/* webpackChunkName: "about" */ "../cheak/two.vue"),
  },
  {
    path: "/three",
    name: "three",
    component: () =>
      import(/* webpackChunkName: "about" */ "../cheak/three.vue"),
  },
  {
    path: "/four",
    name: "four",
    component: () =>
      import(/* webpackChunkName: "about" */ "../cheak/four.vue"),
  },
  {
    path: "/List",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../차트/Vuejs.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
