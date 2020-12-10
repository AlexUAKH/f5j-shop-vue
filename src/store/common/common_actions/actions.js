import firebase from "firebase/app";

export default {
  async fetchCategories({ commit }) {
    try {
      const categories = (
        await firebase
          .database()
          .ref("categories/")
          .once("value")
      ).val();
      let cat = [];
      Object.keys(categories).map(key => {
        cat.push({
          title: categories[key].title,
          img: categories[key].img,
          description: categories[key].description,
          id: key
        });
      });
      console.log("cat action tr: ", cat);
      commit("setCategoriesToState", cat);
      return cat;
    } catch (e) {
      console.log("err db:", e);
      throw e;
    }
  },
  async createCategory({ commit }, category) {
    commit("setLoading", true);
    try {
      const cat = await firebase
        .database()
        .ref("categories/")
        .push(category);
      return { ...category, id: cat.key };
    } catch (e) {
      commit("setError", e);
      throw e;
    }
  },
  async uploadImg({ commit }, img) {
    try {
      const urlPath = await firebase
        .storage()
        .ref("category/" + img.name)
        .put(img);
      const url = await firebase
        .storage()
        .ref()
        .child(urlPath.metadata.fullPath)
        .getDownloadURL();
      console.log("url url: ", url);
      return url;
    } catch (e) {
      console.log("err", e);
      commit("setError", e);
    }
  },
  async editCategory({ commit }, category) {
    commit("setLoading", true);
    try {
      await firebase
        .database()
        .ref("categories/")
        .child(category.id)
        .update(category);
      return category;
    } catch (e) {
      commit("setError", e);
      throw e;
    }
  },
  async deleteCategory({ commit }, id) {
    commit("setLoading", true);
    try {
      await firebase
        .database()
        .ref("categories/")
        .child(id)
        .remove();
    } catch (e) {
      commit("setError", e);
      throw e;
    }
  },
  setLoading({ commit }, payload) {
    commit("setLoading", payload);
  },
  setError({ commit }, payload) {
    commit("setError", payload);
  },
  clearError({ commit }) {
    commit("clearError");
  }
};
