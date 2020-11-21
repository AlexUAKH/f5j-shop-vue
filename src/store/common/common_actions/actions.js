export default {
  changeTheme({ commit }) {
    commit("changeTheme");
  },
  fetchCategories({ commit }) {
    commit("setCategoriesToState", "k0bk");
  },
  setLoading({ commit }, payload) {
    commit("setLoading", payload);
  },
  setError({ commit }, payload) {
    commit("setError", payload);
  },
  clearError({ commit }) {
    commit("clearError");
  }
};
