import Vue from "vue";
import VueRouter from "vue-router";

import VAdminLayout from "../layouts/v-admin-layout";
import VMainLayout from "../layouts/v-main-layout";

import Home from "../pages/Home";
import Register from "../pages/register";
import Login from "../pages/login";
import Page404 from "../components/page404";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    component: VAdminLayout,
    children: [
      {
        path: "profile",
        component: Login
      },
      {
        path: "categories",
        component: () => <div>categories</div>
      }
    ]
  },
  {
    path: "/",
    component: VMainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      },
      {
        path: "register",
        name: "Register",
        component: Register
      },
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/About.vue")
      }
    ]
  },
  {
    path: "*",
    component: Page404
  }
];

const router = new VueRouter({
  routes
});

export default router;
