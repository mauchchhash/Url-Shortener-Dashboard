import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'

function validateAuthentication(to: RouteLocationNormalized) {
  console.log('validateAuthentication called for: ' + to.path)
  return true
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: [validateAuthentication],
      // meta: { requiresAuth: true },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/dashboard/DashboardVue.vue'),
        },
      ],
      redirect: 'dashboard',
    },
    {
      path: '/login',
      name: 'login',
      meta: { requiresGuest: true },
      component: () => import('../views/auth/LoginView.vue'),
    },
  ],
})
router.beforeEach(async (to, from) => {
  console.log('--------------------------- Route ---------------------------')
  console.log({ to })
  console.log({ from })
  return true
})

export default router
