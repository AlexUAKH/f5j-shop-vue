<template>
    <v-app>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapGetters(["checkUser"])
  }
};
</script>

<style lang="scss"></style>
