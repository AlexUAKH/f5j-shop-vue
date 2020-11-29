<template>
  <component :is="layout">
    <keep-alive>
      <router-view />
    </keep-alive>
  </component>
</template>

<script>
import { mapGetters } from "vuex";
import VMainLayout from "./layouts/v-main-layout";
import VAdminLayout from "./layouts/v-admin-layout";

export default {
  name: "app",
  components: { VMainLayout, VAdminLayout },
  computed: {
    ...mapGetters(["checkUser"]),
    layout() {
      return this.$route.meta === "main" ? "v-main-layout" : "v-admin-layout";
    }
  }
};
</script>

<style lang="scss"></style>
