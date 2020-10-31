<template>
  <div id="app">
    <v-main-layout />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VMainLayout from "./components/v-main-layout";

export default {
  name: "app",
  components: { VMainLayout },
  computed: {
    ...mapGetters(["IS_MOBILE", "IS_DESKTOP"])
  },
  methods: {
    ...mapActions(["SET_DESKTOP", "SET_MOBILE"])
  },
  beforeMount() {
    if (window.innerWidth > 767) {
      this.SET_DESKTOP();
    } else {
      this.SET_MOBILE();
    }
  },
  mounted() {
    let vm = this;
    window.addEventListener("resize", function() {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP();
      } else {
        vm.SET_MOBILE();
      }
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
