<template>
  <v-app>
    <v-app-bar app color="danger" dark>
    </v-app-bar>

    <v-carousel cycle hide-delimiters >
      <v-carousel-item
        v-for="(slide,i) in slides"
        :key="i"
        :src="slide.src"
        reverse-transition="fade-transition"
        transition="fade-transition">
      </v-carousel-item>
    </v-carousel>
        <!--<Post linkImage="https://images.unsplash.com/photo-1582675520982-428b0d08bdf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" title="TOP 8 des meilleurs montagnes" content="Venez découvrir notre TOP montagnes (la 4eme va vous etonner)"></Post>-->

        <div class="allPost">
          <Post v-for="post in posts" :key="post.id" :linkImage="post.linkImage" :title="post.title" :content="post.content" ></Post>
        </div>

  </v-app>
</template>

<script>
import Post from './components/Post.vue';

export default {
  name: 'App',
  components: {
    Post
  },
  data:function() {
      return {
        slides: [
          {src:"https://images.unsplash.com/photo-1534841645203-8843b9ac9737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
          {src:"https://images.unsplash.com/photo-1582461154118-af3423f52606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
          {src:"https://images.unsplash.com/photo-1582691317357-ba8a8d890b0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"},
        ],

        posts:[
        {linkImage:"https://images.unsplash.com/photo-1582675520982-428b0d08bdf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", title:"TOP 8 des meilleurs montagnes", content:"Venez découvrir notre TOP montagnes (la 4eme va vous etonner)"},
        {linkImage:"https://images.unsplash.com/photo-1582650948731-8d11a82fce1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80", title:"Gateau vegan", content:"Meilleurs recettes de gateaux vegan"},
        {linkImage:"https://images.unsplash.com/photo-1582472181599-86a60136bdf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", title:"Idées Déco 2020", content:"Vous ne savez pas comment décorer votre intérieur, on est là pour vous aider"},
        {linkImage:"https://images.unsplash.com/photo-1582472181599-86a60136bdf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", title:"Idées Déco 2020", content:"Vous ne savez pas comment décorer votre intérieur, on est là pour vous aider"},
        {linkImage:"https://images.unsplash.com/photo-1582472181599-86a60136bdf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", title:"Idées Déco 2020", content:"Vous ne savez pas comment décorer votre intérieur, on est là pour vous aider"}
      ],
      }
    }
  
};

</script>

<style>
.allPost{
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  padding: 5% 5%;
}

</style>
