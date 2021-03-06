import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/post",
      name: "post",
      component: () => import("./views/Post.vue")
    },
    {
      path: "/list",
      name: "list",
      component: () => import("./views/List.vue")
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("./views/Detail.vue")
    }
  ]
});
