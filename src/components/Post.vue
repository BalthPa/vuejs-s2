<template>
    <v-card class="col-sm-3 mb-5" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="linkImage"
      >
      <v-card-title>{{title}}</v-card-title>
    </v-img>


    <v-card-text class="text--primary">
      <div>{{content}}</div>
    </v-card-text>

    <v-card-actions>

      <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
          @click="read"
        >
          Voir plus
        </v-btn>
      </template>

      <v-card>
        <v-img class="white--text align-end" height="200px" :src="linkImage"></v-img>

        <v-card-title class="headline grey lighten-2" primary-title>
          {{title}}
        </v-card-title>

        <v-card-text>
          {{text}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false" 
          >
            Retour
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>

      <p v-if="isRead">
        Déja lu
      </p>
      <p v-else></p>


    </v-card-actions>
  </v-card>

</template>

<script>
export default {
    name: 'Post',
    props: {
        linkImage: String,
        title: String,
        content: String, 
        text: String
    },
    data:function(){
    return{
      dialog: false,
      isRead: false
    }
  },
  methods:{
    read:function(){
      this.isRead = true;
    }
  }
}
</script>

<style>

</style>