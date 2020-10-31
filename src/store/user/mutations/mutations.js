import User from "../../userClass";

export default {
  /*SWITCH_TO_DESKTOP: state => {
    state.isDesktop = true;
    state.isMobile = false;
  }*/
  SET_USER: (state, id) => {
    state.user = new User(id);
  }
};
