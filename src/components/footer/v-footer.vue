<template>
  <div class="v-footer">
    <div class="v-footer__copyright">
      © 2020 design by
      <a
        href="https://www.linkedin.com/in/oleksandr-loboda-017ab81b4/"
        target="_blank"
      >
        AlexKHUA
      </a>
    </div>
    <div class="v-footer__social_icons">
      <i class="material-icons">mail_outline</i>
      <i class="material-icons">email</i>
      <i class="material-icons">alternate_email</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-footer",
  props: {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.v-footer {
  background-color: $green-bg;
  height: $footer-height;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  font-size: 15px;
  a {
    color: white;
  }
  &__social_icons {
    display: flex;
    color: white;
  }
}
</style>
