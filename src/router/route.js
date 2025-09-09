import AlertsView from '@/views/AlertsView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import HomeView from '@/views/HomeView.vue'
import OrderView from '@/views/orderView.vue'
import PorductView from '@/views/PorductView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/order', component: OrderView },
  { path: '/fav', component: FavoritesView },
  { path: '/alerts', component: AlertsView },
  { path: '/product/:id', component: PorductView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
