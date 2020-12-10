export default {
  setCategoriesToState: (state, categories) => {
    state.categories = categories;
  },
  setLoading: (state, payload) => {
    state.loading = payload;
  },
  setError: (state, error) => {
    state.error = error;
  },
  clearError: state => {
    state.error = null;
  }
};
