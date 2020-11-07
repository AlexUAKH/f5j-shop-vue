export default {
  SET_DESKTOP({ commit }) {
    commit("switchToDesktop");
  },
  SET_MOBILE({ commit }) {
    commit("switchToMobile");
  },
  changeTheme({ commit }) {
    commit("changeTheme");
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
