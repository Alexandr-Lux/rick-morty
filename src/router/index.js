import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import character from '../views/character.vue'
import episode from '../views/episode.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/character/:id',
    name: 'character',
    component: character
  },
  {
    path: '/episode/:id',
    name: 'episode',
    component: episode
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
