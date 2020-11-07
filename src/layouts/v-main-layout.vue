<template>
  <div class="v-main-layout">
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main
        id="scrolling-techniques-7"
        class="overflow-y-auto mt-14"
      >
        <v-container tag="main" style="height: 100%;">
          <keep-alive>
            <router-view class="v-main-layout__pages" />
          </keep-alive>
        </v-container>
      </v-main>
    </v-card>
    <MFooter />
  </div>
</template>

<script>

import MFooter from "../components/footer/v-footer"
export default {
  name: "v-main-layout",
  components: { MFooter }
};
</script>

<style lang="scss"></style>
