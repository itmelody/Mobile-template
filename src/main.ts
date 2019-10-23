import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import core from "@/plugin/core/index";
// 核心插件
Vue.use(core);
// @ts-ignore
// 引入fastclick

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
