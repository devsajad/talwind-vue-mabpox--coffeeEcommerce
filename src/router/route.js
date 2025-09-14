import { useAuthstore } from '@/store/authStore'
import AlertsView from '@/views/AlertsView.vue'
import cartView from '@/views/cartView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import HomeView from '@/views/HomeView.vue'
import LocationView from '@/views/LocationView.vue'
import LoginView from '@/views/LoginView.vue'
import OrderView from '@/views/OrderView.vue'
import PorductView from '@/views/PorductView.vue'
import SignUpView from '@/views/SignUpView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/cart', component: cartView },
  { path: '/login', component: LoginView },
  { path: '/fav', component: FavoritesView },
  { path: '/alerts', component: AlertsView },
  { path: '/signup', component: SignUpView },
  { path: '/product/:id', component: PorductView },
  { path: '/order', component: OrderView, meta: { requiresAuth: true } },
  { path: '/location', component: LocationView, meta: { requiresAuth: true } },
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
