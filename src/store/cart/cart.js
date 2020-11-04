import actions from "./cart_actions/actions";
import mutations from "./cart_mutations/mutations";
import getters from "./cart_getters/getters";

export default {
  state: () => ({
    items: []
  }),
  mutations,
  actions,
  getters
};
