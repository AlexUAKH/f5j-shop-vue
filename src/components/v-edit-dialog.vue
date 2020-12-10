<template>
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
</template>
<script>
export default {
  name: "v-edit.vue",
  props: {
    openDialog: {
      type: Boolean,
      default() {
        return false
      }
  },
  data: () => ({
    editedItem: {
      title: "",
      description: "",
      img: null
    }
  })
};
</script>
