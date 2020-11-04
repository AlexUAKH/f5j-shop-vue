import User from "../../userClass";

export default {
  /*SWITCH_TO_DESKTOP: state => {
    state.isDesktop = true;
    state.isMobile = false;
  }*/
  setUser: (state, payload) => {
    state.user = payload;
  },
  SET_USER_TO_STATE: (state, id) => {
    state.user = new User(id);
  }
};
