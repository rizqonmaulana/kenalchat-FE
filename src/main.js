import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue";
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeolocation from "vue-browser-geolocation";
import toasted from "vue-toasted";

Vue.use(VueGeolocation);

Vue.config.productionTip = false;
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCNBqVrRQSZ93YtY0WmoXMG3T75SKIxE00",
    libraries: "places", // This is required
  },
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(toasted, {
  duration: 10000,
  position: "top-right",
  action: {
    text: "Close",
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
