import firebase from "firebase/app";

export default {
  /*SET_DESKTOP({ commit }) {
      commit("SWITCH_TO_DESKTOP");
    }*/
  async registerUser({ commit }, { email, password }) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log("user: ", user, commit);
  },

  SET_USER({ commit }) {
    commit("SET_USER_TO_STATE");
  }
};
