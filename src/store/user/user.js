import actions from "./user_actions/actions";
import mutations from "./user_mutations/mutations";
import getters from "./user_getters/getters";

export default {
  state: () => ({
    user: { i: "ll" }
  }),
  mutations,
  actions,
  getters
};
