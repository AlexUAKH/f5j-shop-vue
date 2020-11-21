<template>
  <v-app-bar max-height="56px" app>
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

    <v-tooltip bottom v-if="!checkUser">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          class="mx-1"
          v-bind="attrs"
          v-on="on"
          @click="$router.push('login')"
        >
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </template>
      <span>Login to your account</span>
    </v-tooltip>

    <v-menu v-if="checkUser" open-on-hover bottom left offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="mx-1" v-bind="attrs" v-on="on">
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </template>
      <v-list nav>
        <v-subheader>Username</v-subheader>
        <v-divider></v-divider>
        <v-list-item-group>
          <router-link tag="v-list-item" to="/profile?id=ghjngtvh">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>My account</v-list-item-title>
            </v-list-item-content>
          </router-link>
          <router-link tag="v-list-item" to="/orders?id=jhyygyg">
            <v-list-item-icon>
              <v-icon>mdi-format-list-text</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>My orders</v-list-item-title>
            </v-list-item-content>
          </router-link>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Sign out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          class="mx-1"
        >
          <v-badge
            overlap
            :content="getItemOnCartCount"
            :value="getItemOnCartCount"
          >
            <v-icon v-if="!getItemOnCartCount">mdi-cart-outline</v-icon>
            <v-icon v-else>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <span>Go to your cart</span>
    </v-tooltip>

    <v-menu bottom left offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              Dark Mode
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch v-model="$vuetify.theme.dark" />
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-menu>
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
