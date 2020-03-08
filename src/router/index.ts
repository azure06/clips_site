import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Premium from "../views/Premium.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/features",
  },
  {
    path: "/features",
    name: "Home",
    component: Home,
  },
  {
    path: "/premium",
    name: "Premium",
    component: Premium,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/privacy",
    name: "Privacy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Privacy.vue"),
  },
  {
    path: "/app/privacy",
    name: "Clips - Clipboard Manager | Privacy Policy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AppPrivacy.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
