export default {
  switchToDesktop: state => {
    state.isDesktop = true;
    state.isMobile = false;
  },
  switchToMobile: state => {
    state.isMobile = true;
    state.isDesktop = false;
  },
  setLoading: (state, payload) => {
    state.loading = payload;
  },
  setError: (state, payload) => {
    state.error = payload;
  },
  clearError: (state) => {
    state.error = null;
  }
};
