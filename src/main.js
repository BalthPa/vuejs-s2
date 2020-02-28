import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Post from './components/Post.vue';


Vue.config.productionTip = false;

Vue.component('Post', Post);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
