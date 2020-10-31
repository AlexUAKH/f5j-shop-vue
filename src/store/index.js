import Vue from "vue";
import Vuex from "vuex";
import user from "./user/user"
import common from "./common/store";
import cart from "./cart/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    common,
    cart
  }
});
