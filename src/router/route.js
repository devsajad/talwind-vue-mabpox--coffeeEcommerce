import { useAuthstore } from '@/store/authStore'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/cart',
    component: () => import('@/views/cartView.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/fav',
    component: () => import('@/views/FavoritesView.vue'),
  },
  {
    path: '/alerts',
    component: () => import('@/views/AlertsView.vue'),
  },
  {
    path: '/signup',
    component: () => import('@/views/SignUpView.vue'),
  },
  {
    path: '/product/:id',
    component: () => import('@/views/PorductView.vue'),
  },
  {
    path: '/order/:id',
    component: () => import('@/views/OrderView.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/location',
    component: () => import('@/views/LocationView.vue'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthstore()

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
