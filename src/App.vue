<script setup>
import { onMounted } from 'vue'
import Navbar from './components/layout/navbar/Navbar.vue'
import { useCartStore } from './store/cartStore'

const cartStore = useCartStore()

onMounted(() => {
  cartStore.init()
})
</script>

<template>
  <div class="relative">
    <RouterView />
    <Navbar />
  </div>
</template>

<style scoped></style>
