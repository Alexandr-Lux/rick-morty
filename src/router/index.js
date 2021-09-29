import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import character from '../views/character.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/character',
    name: 'character',
    component: character
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
