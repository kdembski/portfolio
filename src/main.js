import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
Vue.config.productionTip = false;

/*router.beforeEach((to, from, next) => {
  console.log(from, to, "before");
  store.commit("setLoading", true);
  next();
});*/

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
