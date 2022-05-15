import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Beranda.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/masukan",
      name: "masukan",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Masukan.vue"),
    },
    {
      path: "/juzs/:id",
      name: "juzs",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Juz.vue"),
    },
    {
      path: "/surahs/:id",
      name: "surahs",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Surah.vue"),
    },
    {
      path: "/pencarian",
      name: "pencarian",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Pencarian.vue"),
    },
    {
      path: "/acak",
      name: "acak",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AyatAcak.vue"),
    },


  ],
});

export default router;

