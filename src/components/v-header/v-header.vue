<template>
  <div class="v-header">
    <v-back-drop @cm="closeMenu" v-if="isMobileMenuOpen" />
    <v-header-mobile-menu
      v-if="isMobileMenuOpen"
      :categories="categories"
      @closeMenu="closeMenu"
      @goToPage="goToPage"
    />
    <div class="v-header__left_group">
      <div v-if="IS_MOBILE" class="v-header__mobile_menu_btn">
        <span class="material-icons" @click="isMobileMenuOpen = true">
          menu
        </span>
      </div>
      <div class="v-header__logo">
        <router-link to="/"> <span>F</span>5J models </router-link>
      </div>
    </div>
    <v-header-desktop-menu v-if="IS_DESKTOP" :categories="categories" />
    <div class="v-header__right_group">
      <div class="v-header__right_btns">
        <span class="material-icons">shopping_cart</span>
        <span class="material-icons">account_circle</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VHeaderDesktopMenu from "./v-header-desktop-menu";
import VBackDrop from "../v-back-drop/v-back-drop";
import VHeaderMobileMenu from "./v-header-mobile-menu";

export default {
  name: "v-header",
  components: { VHeaderMobileMenu, VBackDrop, VHeaderDesktopMenu },
  props: {},
  data() {
    return {
      categories: [
        { title: "Alpha 2.0", path: "/alpha" },
        { title: "Pulsar", path: "/pulsar" },
        { title: "Accessorize", path: "/accessorize" },
        { title: "Contact us", path: "/contacts" }
      ],
      isMobileMenuOpen: false
    };
  },
  computed: {
    ...mapGetters(["IS_DESKTOP", "IS_MOBILE"])
  },
  methods: {
    closeMenu() {
      this.isMobileMenuOpen = false;
    },
    goToPage(page) {
      this.closeMenu();
      this.$router.push(page);
    }
  }
};
</script>

<style lang="scss">
.v-header {
  width: 100%;
  height: 40px;
  padding: 5px 15px;
  font-size: 1.2em;
  box-sizing: border-box;
  background: $green-bg;
  color: white;
  line-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  &__mobile_menu_btn {
    display: flex;
    cursor: pointer;
    & .material-icons {
      line-height: 40px;
      font-size: 30px;
    }
    margin-right: 15px;
  }
  &__left_group {
    display: flex;
    flex-direction: row;
  }
  &__logo {
    font-weight: bold;
    a {
      color: white;
    }
  }
  &__logo span {
    text-transform: uppercase;
    color: orangered;
  }
  &__right_btns {
    display: flex;
    flex-direction: row;
  }
  &__right_btns span {
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>
