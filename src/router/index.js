import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import * as firebase from "firebase";
import "../fb";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/PhoneAuth",
    name: "PhoneAuth",
    component: () => import("../views/PhoneAuth.vue"),
    meta: { requiresGuest: true },
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({ path: "/PhoneAuth" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser != null) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
