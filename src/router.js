import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue'
import IndexPage from '@/components/IndexPage.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/index',
      component: IndexPage
    }
  ],
});
