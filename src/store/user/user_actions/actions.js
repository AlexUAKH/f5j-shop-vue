import firebase from "firebase/app";
import User from "../../userClass";
export default {
  async registerUser({ commit }, { email, password }) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    commit("setUser", new User(user.user.uid));
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
