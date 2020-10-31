<template>
  <div class="v-header__mobile_menu">
    <span class="v-header__mobile_menu_closeBtn">
      <i class="material-icons" @click="$emit('closeMenu')">close</i>
    </span>
    <hr />
    <span
      v-for="(item, ind) in categories"
      :key="ind"
      @click="$emit('goToPage', item.path)"
    >
      {{ item.title }}
    </span>
    <hr />
  </div>
</template>

<script>
export default {
  name: "v-header-mobile-menu",
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
.v-header__mobile_menu {
  position: absolute;
  border: $menu-border-color solid 2px;
  background-color: white;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 300px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;

  hr {
    color: $menu-border-color;
    width: 100%;
    margin: 0;
  }

  span:not(:first-child) {
    padding: 10px 0;
    font-size: larger;
    font-weight: bold;
    width: 100%;
    cursor: pointer;

    &:hover {
      background-color: $green-bg-hover;
      color: white;
    }
  }

  &_closeBtn {
    height: 40px;
    cursor: pointer;
    align-self: flex-end;
    margin-right: 10px;

    & .material-icons {
      line-height: 40px;
      font-size: 30px;
    }
  }
}
</style>
