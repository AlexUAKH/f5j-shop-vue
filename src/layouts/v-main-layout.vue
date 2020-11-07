<template>
  <v-sheet class="d-flex flex-column" height="100vh">
    <v-header @openDrawer="openDrawer" />
    <v-main class="" height="100%">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">
            Dark Mode
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action
          ><v-switch v-model="$vuetify.theme.dark" />
        </v-list-item-action>
      </v-list-item>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-main>
    <MFooter />
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import MFooter from "../components/footer/v-footer";
import VHeader from "../components/header/v-header";

export default {
  name: "v-main-layout",
  components: { VHeader, MFooter },
  data() {
    return {
      drawer: false,
      group: null
    };
  },
  methods: {
    openDrawer() {
      this.drawer = !this.drawer;
    }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style lang="scss"></style>
