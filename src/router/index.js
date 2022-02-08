import Vue from "vue";
import VueRouter from "vue-router";
import main from "../views/main";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/main/shoppingCart",
  },
  {
    path: "/main/shoppingCart",
    name: "Checkout",
    component: main,
    redirect: "/main/shoppingCart/address",
    children: [
      {
        path: "address",
        name: "address",
        component: () => import("../components/FormStep1.vue"),
      },
      {
        path: "delivery",
        name: "delivery",
        component: () => import("../components/FormStep2.vue"),
      },
      {
        path: "payment",
        name: "payment",
        component: () => import("../components/FormStep3.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
