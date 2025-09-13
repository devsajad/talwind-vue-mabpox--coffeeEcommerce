<script setup>
import CartViewNav from '@/features/cart/CartViewNav.vue'
import ProductDetailsNav from '@/features/products/productDetails/ProductDetailsNav.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from './Navigation.vue'

const route = useRoute()
const isShowCartNav = ref(true)

function handleCloseCartNav() {
  isShowCartNav.value = !isShowCartNav.value
}

watch(
  () => route.path,
  () => {
    isShowCartNav.value = true
  },
)
</script>

<template>
  <div
    :class="{
      'translate-y-0': isShowCartNav,
      'translate-y-19': !isShowCartNav,
      'duration-500 fixed bottom-0 w-dvw bg-white rounded-t-4xl shadow-2xl md:max-w-5xl md:right-1/2 md:translate-x-1/2': true,
    }"
  >
    <Navigation v-if="route.path === '/' || route.path === '/login' || route.path === '/signup'"  />
    <CartViewNav
      v-else-if="route.path === '/cart'"
      @close="handleCloseCartNav"
      :isShowCartNav="isShowCartNav"
    />
    <ProductDetailsNav v-else-if="route.path.startsWith('/product')" />
  </div>
</template>
