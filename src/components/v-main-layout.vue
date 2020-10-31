<template>
  <div class="v-main-layout">
    <v-header />
    <keep-alive>
      <router-view class="v-main-layout__pages"/>
    </keep-alive>
    <v-footer />
  </div>
</template>

<script>
import VHeader from "./v-header/v-header";
import VFooter from "./footer/v-footer";

export default {
  name: "v-main-layout",
  components: { VFooter, VHeader }
};
</script>

<style lang="scss">
.v-main-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  &__pages {
    margin-top: $header-height;
    flex-grow: 1;
  }
}
</style>
