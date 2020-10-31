import actions from "./actions/actions";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

export default {
  state: () => ({
    products: []
  }),
  mutations,
  actions,
  getters
};
