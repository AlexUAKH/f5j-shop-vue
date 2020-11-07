import firebase from "firebase/app";
import User from "../../userClass";
export default {
  async registerUser({ commit }, { email, password }) {
    commit("clearError");
    commit("setLoading", true);
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      commit("setUser", new User(user.user.uid));
      commit("setLoading", false);
    } catch (error) {
      commit("setLoading", false);
      commit("setError", error.message);
      throw error;
    }
  },
  async loginUser({ commit }, { email, password }) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(user);
    commit("SET_USER_TO_STATE");
  },

  SET_USER({ commit }) {
    commit("SET_USER_TO_STATE");
  }
};
