// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "@/views/Index.vue";
import HomeVue from "@/views/User.vue";
import Login from "@/views/Login.vue";
const routes: Array<RouteRecordRaw> = [
  { path: "/home", component: HomeVue },
  { path: "/index", component: Index },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
/**
 * 全局前置路由守卫，每一次路由跳转前都进入这个 beforeEach 函数
 */
router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    // 登录或者注册才可以往下进行
    next();
  } else {
    // 获取 token
    const token = localStorage.getItem("Authorization");
    // token 不存在
    if (token === null || token === "") {
      ElMessage.error("您还没有登录，请先登录");
      next("/login");
    } else {
      next();
    }
  }
});
export default router;
