import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue'),
      children: [
        {
          path: '/dmhy',
          name: 'dmhy',
          component: () => import('@/views/dmhy/DmhyView.vue'),
        },
      ],
    },

    {
      path: '/auth-landing',
      name: 'AuthLanding',
      component: () => import('@/views/auth/AuthLanding.vue'),
    },
  ],
})

export default router
