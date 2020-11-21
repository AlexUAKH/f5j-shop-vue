import actions from "./common_actions/actions";
import mutations from "./common_mutations/mutations";
import getters from "./common_getters/getters";
const categ = ["Alpha 2.0", "Pulsar", "Accessorize", "Spare parts", "Review"];
export default {
  state: () => ({
    categories: categ,
    loading: false,
    error: null
  }),
  mutations,
  actions,
  getters
};
