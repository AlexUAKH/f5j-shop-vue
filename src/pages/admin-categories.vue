<template>
  <v-container>
    <v-row align="center" justify="end">
      <v-btn color="primary" @click="editItem(-1)"
        ><v-icon dark> mdi-plus </v-icon>Add new category</v-btn
      >
    </v-row>
    <v-row v-if="loading">
      <v-overlay :value="loading">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular> </v-overlay
    ></v-row>
    <v-row v-else>
      <v-col sm="6" lg="4" cols="12" v-for="(cat, ind) in category" :key="ind">
        <v-card :loading="loading" class="mx-auto my-2" max-width="400">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" :src="cat.img" @click="editItem(ind)"></v-img>

          <v-card-title @click="editItem(ind)">{{ cat.title }}</v-card-title>

          <v-card-text @click="editItem(ind)">
            <div>
              {{ cat.description }}
            </div>
          </v-card-text>

          <v-divider class="mx-6"></v-divider>

          <v-card-actions>
            <v-btn color="orange" text @click="editItem(ind)">
              Edit
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="orange" text @click="deleteItem(ind)">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Edit category</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-file-input
                  validate-on-blur
                  v-model="fileName"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an avatar"
                  prepend-icon="mdi-camera"
                  label="Avatar"
                ></v-file-input>
              </v-col>
              <!--<v-col cols="12" v-if="fileName">
                <v-img :src="category[editedIndex].img"></v-img>
              </v-col>-->
              <v-col cols="12">
                <v-text-field
                  label="Category title*"
                  required
                  v-model="editedItem.title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Category description"
                  v-model="editedItem.description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "admin-categories",
  data: () => ({
    category: [],
    loading: true,
    dialog: false,
    dialogDelete: false,
    fileName: null,
    editedIndex: -1,
    editedItem: {
      title: "",
      description: "",
      img: null
    },
    defaultItem: {
      title: "",
      description: "",
      img: null
    }
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  async mounted() {
    try {
      this.category = (await this.$store.dispatch("fetchCategories")) || [];
      this.loading = false;
      console.log("mounted success: ", this.category);
    } catch (e) {
      console.log("mounted err: ", e);
    }
  },

  methods: {
    editItem(item) {
      if (item === -1) {
        this.editedItem = Object.assign({}, this.defaultItem);
      } else {
        this.editedIndex = item;
        this.editedItem = Object.assign({}, this.category[item]);
      }
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = item;
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      try {
        await this.$store.dispatch(
          "deleteCategory",
          this.category[this.editedIndex].id
        );
      } catch (e) {
        console.log("err del: ", e);
      }
      this.category.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      let cat = {};
      let url = null;
      try {
        if (this.fileName) {
          url = await this.$store.dispatch("uploadImg", this.fileName);
        }
        if (this.editedIndex === -1) {
          this.editedItem["img"] =
            url ||
            "https://firebasestorage.googleapis.com/v0/b/f5jshop-vue.appspot.com/o/category%2Fno_photo.png?alt=media&token=72a9e353-c01e-48c6-93dc-2e620b3ed20d";
          cat = await this.$store.dispatch("createCategory", this.editedItem);
          this.category.push(cat);
        } else {
          if (url) {
            this.editedItem["img"] = url;
          }
          cat = await this.$store.dispatch("editCategory", this.editedItem);
          this.category[this.editedIndex].title = this.editedItem.title;
          this.category[this.editedIndex].img = this.editedItem.img;
          this.category[
            this.editedIndex
          ].description = this.editedItem.description;
          console.log("edit");
        }
      } catch (e) {
        console.log("dd: ", e);
      }

      this.close();
    }
  }
};
</script>

<style lang="scss">
.admin-categories {
}
</style>
