import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import send from './send.vue'
import recieve from './recieve.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/send',
      name: 'send',
      component: send,
    },
    {
      path: '/recieve',
      name: 'recieve',
      component: recieve,
    },
  ],
})
