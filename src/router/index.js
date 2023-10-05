import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home.vue'
import works from '../views/works.vue'
import blog from '../views/blog.vue'
import viewAll from '../views/blog.vue'

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         name: 'home',
         path: '/',
         component: home
      },
      {
         name: 'works',
         path: '/works',
         component: works
      },
      {
         name: 'blog',
         path: '/blog',
         component: blog
      },
      {
         name: 'viewAll',
         path: '/blog',
         component: viewAll
      }]
})

export default router