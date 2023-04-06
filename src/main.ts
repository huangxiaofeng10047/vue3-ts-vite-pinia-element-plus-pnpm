import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
// import './style.css'
import App from "./App.vue";
import "virtual:svg-icons-register";
import router from "@/router/index";
import { createPinia } from "pinia";
import "@/assets/styles/reset.scss";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

// 注册 Element-Plus
app.use(ElementPlus, {
  locale: zhCn,
});
// 注册 Element-Plus Icon 组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
