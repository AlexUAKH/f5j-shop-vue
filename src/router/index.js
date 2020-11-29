import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: "main",
    component: Home
  },
  {
    path: "/admin",
    name: "Categories",
    meta: "admin",
    component: () => import("../pages/admin-categories")
  },
  {
    path: "/admin/orders",
    name: "adminOrders",
    meta: "admin",
    component: () => import("../pages/admin-orders")
  },
  {
    path: "/admin/products",
    name: "adminProducts",
    meta: "admin",
    component: () => import("../pages/admin-products")
  },
  {
    path: "/admin/reviews",
    name: "adminReviews",
    meta: "admin",
    component: () => import("../pages/admin-reviews")
  },
  {
    path: "*",
    component: () => import("../pages/page404")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
