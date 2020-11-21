import Vue from "vue";
import Vuelidate from "vuelidate";
import Vuetify from "vuetify";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "vuetify/dist/vuetify.min.css";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/messaging";

Vue.use(Vuelidate);
Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    light: false,
    options: {
      themeCache: {
        get: key => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value)
      }
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyBSfqnT13EVSS6R_JTr_5yS_GZ7QOpQI-k",
      authDomain: "f5jshop-vue.firebaseapp.com",
      databaseURL: "https://f5jshop-vue.firebaseio.com",
      projectId: "f5jshop-vue",
      storageBucket: "f5jshop-vue.appspot.com",
      messagingSenderId: "591295675388",
      appId: "1:591295675388:web:fc2d0cf5cee6a52f3c5079",
      measurementId: "G-YPHRT779EW"
    };
    firebase.initializeApp(firebaseConfig);
  },
  render: h => h(App)
}).$mount("#app");
