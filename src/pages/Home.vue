<template>
  <div>
    <p>hvjkvkg jgjgvvk hvgvkjg kgvv gv</p>
    <v-container class="grey lighten-5 mt-2">
      <v-row>
        <v-col
          v-for="(category, n) in getCategories"
          :key="n"
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapGetters(["getCategories"])
  }
};
</script>
