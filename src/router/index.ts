import useAuthStore from '@/store/authStore'
import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'

async function validateAuthentication() {
  const authStore = useAuthStore()
  if (authStore.accessToken == null && (await authStore.refreshToken()) == false) {
    return { name: 'login' }
  }
  return true
}

async function validateGuest(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  const authStore = useAuthStore()
  // console.log({ to, from })
  if (authStore.accessToken || (await authStore.refreshToken()) == true)
    return { name: 'dashboard' }
  return true
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // beforeEnter: [validateAuthentication],
      meta: { requiresAuth: true },
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
      // beforeEnter: [validateGuest],
      meta: { requiresGuest: true },
      component: () => import('../views/auth/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      // beforeEnter: [validateGuest],
      meta: { requiresGuest: true },
      component: () => import('../views/auth/RegisterView.vue'),
    },
  ],
})
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  if (to.meta.requiresAuth) {
    const authStore = useAuthStore()
    if (authStore.accessToken == null && (await authStore.refreshToken()) == false) {
      return { name: 'login' }
    }
    return true
  } else if (to.meta.requiresGuest) {
    if (from.meta.requiresAuth) return true

    const authStore = useAuthStore()
    if (authStore.accessToken || (await authStore.refreshToken()) == true)
      return { name: 'dashboard' }
    return true
  }
  // console.log('--------------------------- Route ---------------------------')
  // console.log({ to })
  // console.log({ from })
  return true
})

export default router
