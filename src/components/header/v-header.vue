<template>
  <v-app-bar max-height="56px">
    <v-app-bar-nav-icon
      @click.stop="$emit('openDrawer')"
      class="hidden-md-and-up"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link to="/" style="text-decoration: none; color: inherit;">
        Title
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-divider vertical></v-divider>

      <v-btn text active-class="">
        News
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Blog
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Music
      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-btn v-if="checkUser" icon class="mx-1">
      <v-icon> mdi-account-circle-outline</v-icon>
      userName
    </v-btn>
    <v-btn v-if="!checkUser" icon class="mx-1" @click="$router.push('login')">
      <v-icon> mdi-login</v-icon>
    </v-btn>

    <v-btn icon class="mx-1">
      <v-badge
        overlap
        :content="getItemOnCartCount"
        :value="getItemOnCartCount"
      >
        <v-icon v-if="!getItemOnCartCount">mdi-cart-outline</v-icon>
        <v-icon v-if="getItemOnCartCount">mdi-cart</v-icon>
      </v-badge>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v-header",
  data() {
    return {
      drawer: false,
      group: null
    };
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
  computed: {
    ...mapGetters(["getItemOnCartCount", "checkUser"])
  },
  methods: {}
};
</script>

<style lang="scss">
.v-header {
}
</style>
