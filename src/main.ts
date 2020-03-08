import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueGtag from "vue-gtag";
import { environment } from "./environment";
import firebase from "firebase";

Vue.config.productionTip = false;

firebase.initializeApp(environment.firebaseConfig);

Vue.use(
  VueGtag,
  {
    config: { id: environment.firebaseConfig.measurementId }
  },
  router
);

new Vue({
  router,
  // eslint-disable-next-line
  // @ts-ignore
  vuetify,
  render: h => h(App)
}).$mount("#app");
