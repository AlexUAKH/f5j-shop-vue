<template>
  <div>
    <p>hvjkvkg jgjgvvk hvgvkjg kgvv gv</p>
    <v-container class="grey lighten-5 mt-2">
      <v-row>
        <v-col
          v-for="category in categories"
          :key="category.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-hover v-slot="{ hover }" close-delay="200">
            <v-card
              class="pa-2"
              outlined
              tile
              :elevation="hover ? 8 : 2"
              :class="{ 'on-hover': hover }"
            >
              {{ category }}
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="() => ($vuetify.theme.dark = false)">light</v-btn>
    <v-btn @click="() => ($vuetify.theme.dark = true)">dark k</v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    categories: []
  }),
  async mounted() {
    try {
      this.categories = (await this.$store.dispatch("fetchCategories")) || [];
      this.loading = false;
      console.log("mounted success: ", this.categories);
    } catch (e) {
      console.log("mounted err: ", e);
    }
  }
};
</script>
