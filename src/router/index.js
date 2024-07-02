import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import add from '../views/add.vue'
import about from '../views/about.vue'
import services from '../views/services.vue'
import NotFound from '../views/notfound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    },
    {
      path: '/add',
      name: 'add',
      component: add,
    },
    {
      path: '/services',
      name: 'services',
      component: services,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/:notFound',
      component: NotFound,
    }
  ]
})

export default router
