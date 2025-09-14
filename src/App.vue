<script setup>
import { onMounted } from 'vue'
import Navbar from './components/layout/navbar/Navbar.vue'
import { useCartStore } from './store/cartStore'
import { useAuthstore } from './store/authStore'

const cartStore = useCartStore()
const authStore = useAuthstore()

onMounted(() => {
  authStore.init()
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
