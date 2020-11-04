import actions from "./products_actions/actions";
import mutations from "./products_mutations/mutations";
import getters from "./products_getters/getters";

export default {
  state: () => ({
    products: []
  }),
  mutations,
  actions,
  getters
};
