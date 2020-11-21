export default {
  getCategories(state) {
    return state.categories;
  },
  IS_MOBILE(state) {
    return state.isMobile;
  },
  IS_DESKTOP(state) {
    return state.isDesktop;
  },
  IS_LOADING(state) {
    return state.loading;
  },
  IS_ERROR(state) {
    return state.error;
  }
};
