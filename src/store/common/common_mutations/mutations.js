export default {
  setCategoriesToState: (state, categories) => {
    state.categories = categories;
  },
  changeTheme: state => {
    state.theme = state.theme === "light" ? "dark" : "light";
  },
  setLoading: (state, payload) => {
    state.loading = payload;
  },
  setError: (state, payload) => {
    state.error = payload;
  },
  clearError: state => {
    state.error = null;
  }
};
