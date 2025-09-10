<script setup>
import ProductDetailsNav from '@/features/products/productDetails/ProductDetailsNav.vue'
import Navigation from './Navigation.vue'
</script>

<template>
  <div
    class="fixed bottom-0 w-dvw bg-white rounded-t-4xl shadow-2xl md:max-w-5xl md:right-1/2 md:translate-x-1/2"
  >
    <Navigation v-if="$route.path === '/'" />
    <ProductDetailsNav v-else-if="$route.path.startsWith('/product')" />
  </div>
</template>
