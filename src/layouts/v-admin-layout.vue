<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            :exact="item.exact"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Admin panel</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app dark padless>
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>AlexKHUA</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "v-admin-layout",
  data: () => ({
    drawer: null,
    items: [
      { title: "Categories", icon: "md-", to: "/admin", exact: true },
      { title: "Products", icon: "md-", to: "/admin/products" },
      { title: "Orders", icon: "md-", to: "/admin/orders" },
      { title: "Reviews", icon: "md-", to: "/admin/reviews" }
    ],
    watch: {
      group() {
        this.drawer = false;
      }
    }
  })
};
</script>

<style lang="scss">
.v-admin-layout {
}
</style>
