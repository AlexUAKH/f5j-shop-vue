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

          <v-img height="250" :src="cat.img"></v-img>

          <v-card-title>{{ cat.title }}</v-card-title>

          <v-card-text>
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
      <v-col sm="6" lg="4" cols="12">
        <v-hover v-slot="{ hover }">
          <v-card @click="editItem(-1)">
            <v-skeleton-loader
              boilerplate
              elevation="2"
              type="image, article, actions"
            >
            </v-skeleton-loader>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                <v-icon size="150">mdi-plus</v-icon>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </v-hover>
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
    category: [
      {
        title: "Alpha 2.0",
        description:
          "new Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at blanditiis eius praesentium repudiandae soluta.",
        img: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
      },
      {
        title: "Alpha 2.0",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at blanditiis eius praesentium repudiandae soluta.",
        img:
          "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/cat-close-to-screen.jpg"
      },
      {
        title: "Alpha 2.0",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at blanditiis eius praesentium repudiandae soluta.",
        img:
          "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg"
      },
      {
        title: "Alpha 2.0",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at blanditiis eius praesentium repudiandae soluta.",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM44430OV4S8zI71m_HHhsZRILQ73p4NjH7A&usqp=CAU"
      }
    ],
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

  created() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
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
      this.editedItem = Object.assign({}, this.category[item]);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
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

    save() {
      if (this.editedIndex === -1) {
        this.editedItem.img = require("@/assets/images/no_photo.png");
      }
      if (this.editedIndex > -1) {
        Object.assign(this.category[this.editedIndex], this.editedItem);
      } else {
        this.category.push(this.editedItem);
      }
      console.log("imgURL: ", this.editedItem, this.editedIndex);
      this.close();
    }
  }
};
</script>

<style lang="scss">
.admin-categories {
}
</style>
