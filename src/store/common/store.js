import actions from "./actions/actions";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

export default {
  state: () => ({
    isMobile: false,
    isDesktop: true,
    categories: []
  }),
  mutations,
  actions,
  getters
};
