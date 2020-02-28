<template>
  <v-app>
    <v-app-bar app color="danger" dark>
    <h1 class='mx-auto'>Manger c'est bien</h1>
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

        <div class="d-flex flex-wrap justify-space-around">
          <Post v-for="post in posts" :key="post.id" :linkImage="post.linkImage" :title="post.title" :content="post.content" :text="post.text" class="mt-5"></Post>
          
        </div>

      <v-footer padless>
        <v-col class="text-center" cols="12">{{today | toDate}} - <strong>PAPIN Balthazar</strong>
    </v-col>
  </v-footer>
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
          {src:"https://images.unsplash.com/photo-1524859330668-c357331384f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2112&q=80"},
          {src:"https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2920&q=80"},
          {src:"https://images.unsplash.com/photo-1525596201491-f6eae338a205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"},
        ],

        posts:[
        {
          linkImage:"https://images.unsplash.com/photo-1518047601542-79f18c655718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", 
          title:"TOP 8 des gateaux originaux", 
          content:"Venez découvrir notre TOP des gateaux originaux (le 4eme va vous etonner)", 
          text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam turpis, pulvinar mattis libero venenatis, euismod pretium massa. Pellentesque nisi risus, luctus vestibulum dictum id, maximus nec nisi. Pellentesque lacinia ipsum vitae mauris feugiat, quis aliquet lectus facilisis. Morbi dictum ligula et felis rutrum pulvinar. Cras metus augue, blandit consequat sollicitudin nec, consequat vel dolor. Etiam semper pellentesque lorem ac scelerisque. Nullam dapibus neque ut felis sollicitudin laoreet."
        },
        
        {
          linkImage:"https://images.unsplash.com/photo-1582650948731-8d11a82fce1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80", 
          title:"Gateau vegan", 
          content:"Meilleurs recettes de gateaux vegan",
          text:"Nulla vitae lacus ligula. Curabitur quis enim quis magna vulputate euismod. Praesent iaculis dui egestas orci vulputate, bibendum venenatis erat faucibus. Vivamus at turpis congue turpis venenatis feugiat ut sit amet massa. Cras at cursus diam. Nam in vestibulum felis. Etiam eu augue quis elit auctor finibus commodo sit amet orci. Morbi efficitur scelerisque quam ac scelerisque. Phasellus volutpat posuere sagittis. Morbi euismod odio at mauris fringilla, sit amet tempor tellus interdum. Vivamus vitae blandit lacus, ac facilisis risus. Vivamus mattis tincidunt consequat."
        },

        {
          linkImage:"https://images.unsplash.com/photo-1500291161618-747dee2ab16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", 
          title:"Gaspacho 2020", 
          content:"Soupe à la tomate, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text:"Phasellus et ligula et quam maximus lobortis. Proin lectus orci, maximus id laoreet sed, ultrices quis libero. In facilisis odio nec ex pulvinar aliquet. Mauris nec auctor turpis. Mauris in purus sed diam blandit dapibus in dictum sem. Nunc dignissim ac tellus vitae elementum. Nunc velit ante, eleifend in ligula sit amet, mattis tincidunt ipsum. Morbi eget nibh leo. Vestibulum at sagittis libero. Nunc id risus leo."
        },

        {
          linkImage:"https://images.unsplash.com/photo-1450152021501-598b36b17449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", 
          title:"Nulla vitae lacus ligula", 
          content:"Phasellus et ligula et quam maximus lobortis. Proin lectus orci",
          text:"Morbi a felis quis dui aliquam convallis non a libero. Ut scelerisque nisi luctus posuere aliquet. Morbi porta in elit sagittis blandit. Nullam ultrices ante in arcu sodales, eget euismod purus accumsan. Sed vehicula lacus sit amet turpis maximus, gravida cursus eros accumsan. Aliquam efficitur vestibulum sodales. Integer luctus, dolor vehicula sodales semper, lorem odio consequat nunc, in sollicitudin velit metus ut tortor. Nunc varius posuere mi, a mattis sem fringilla ut."
        },

        {linkImage:"https://images.unsplash.com/photo-1536329639134-ade172b2fea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", 
        title:"Morbi a felis quis dui aliquam convallis non a libero", 
        content:"Proin ultricies fermentum ultricies. Phasellus quis fringilla mi.",
        text:"Proin ultricies fermentum ultricies. Phasellus quis fringilla mi. Morbi sit amet massa ut tellus iaculis sollicitudin id eu tortor. Aenean quis fermentum sem, in suscipit diam. Duis cursus euismod est, dignissim rutrum metus ultricies in. Mauris gravida lacus a ex rutrum malesuada. Integer viverra, libero non tristique lobortis, arcu sapien egestas elit, vitae fringilla velit purus vitae dui. Suspendisse imperdiet facilisis nunc pharetra commodo."
        
        }
      ],
      today : Date.now(),
      }
    },

    filters:{
      toDate : function (dateValue) {
               return new Date(dateValue).toLocaleDateString();

    }
}
}
</script>

<style>


</style>
