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
      <v-btn
        color="orange"
        text
        href="#"
      >
        Voir plus
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>

    </v-card-actions>
  </v-card>

</template>

<script>
export default {
    name: 'Post',
    props: {
        linkImage: String,
        title: String,
        content: String
    },
    data:function(){
    return{
    }
  }
}
</script>