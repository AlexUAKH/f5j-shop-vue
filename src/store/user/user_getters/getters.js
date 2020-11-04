export default {
  /*IS_MOBILE(state) {
    return state.isMobile;
  }*/
  user(state) {
    return state.user;
  },
  checkUser(state) {
    return state.user !== null;
  }
};
