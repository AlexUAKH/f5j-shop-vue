import actions from "./common_actions/actions";
import mutations from "./common_mutations/mutations";
import getters from "./common_getters/getters";

export default {
  state: () => ({
    theme: "dark",
    isMobile: false,
    isDesktop: true,
    categories: [],
    loading: false,
    error: null
  }),
  mutations,
  actions,
  getters
};
