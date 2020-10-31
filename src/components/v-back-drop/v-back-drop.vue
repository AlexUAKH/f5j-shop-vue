<template>
  <div class="v-back-drop" @click="$emit('cm')"></div>
</template>

<style lang="scss">
.v-back-drop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
