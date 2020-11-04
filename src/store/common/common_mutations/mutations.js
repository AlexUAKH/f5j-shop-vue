export default {
  SWITCH_TO_DESKTOP: state => {
    state.isDesktop = true;
    state.isMobile = false;
  },
  SWITCH_TO_MOBILE: state => {
    state.isMobile = true;
    state.isDesktop = false;
  }
};
