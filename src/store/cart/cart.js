import actions from "./cart_actions/actions";
import mutations from "./cart_mutations/mutations";
import getters from "./cart_getters/getters";

export default {
  state: () => ({
    cartItems: []
  }),
  mutations,
  actions,
  getters
};
