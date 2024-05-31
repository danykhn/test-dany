import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'perfil',
      component: () => import('../views/perfil/Perfil.vue')
    },
    {
      path: '/chat',
      name: 'chat',
     component: () => import('../views/chat/Chat.vue')
    }
  ]
})

export default router
