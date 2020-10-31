<template>
  <div class="v-header-desktop-menu">
    <ul class="v-header-desktop-menu__menu_desktop_list">
      <li
        v-for="(item, ind) in categories"
        :key="ind"
        @click="$router.push(item.path)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-header-desktop-menu",
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss">
.v-header-desktop-menu {
  &__menu_desktop_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
  }
  &__menu_desktop_list li {
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    border-radius: $radius;
    &:hover {
      background-color: $green-bg-hover;
    }
  }
}
</style>
