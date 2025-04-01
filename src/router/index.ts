import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'

function validateAuthentication() {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken == null) return { name: 'login' }
  return true
}

function validateGuest() {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) return { name: 'dashboard' }
  return true
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: [validateAuthentication],
      redirect: 'dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/dashboard/DashboardVue.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: [validateGuest],
      meta: { requiresGuest: true },
      component: () => import('../views/auth/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      beforeEnter: [validateGuest],
      meta: { requiresGuest: true },
      component: () => import('../views/auth/RegisterView.vue'),
    },
  ],
})
router.beforeEach(async (_to: RouteLocationNormalized, _from: RouteLocationNormalized) => {
  // console.log('--------------------------- Route ---------------------------')
  // console.log({ to })
  // console.log({ from })
  return true
})

export default router
