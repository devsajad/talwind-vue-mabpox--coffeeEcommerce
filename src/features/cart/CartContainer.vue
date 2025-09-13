<script setup>
import { useCartStore } from '@/store/cartStore'
import { ShoppingCartIcon } from 'lucide-vue-next'

const cartStore = useCartStore()
</script>

<template>
  <div
    v-if="cartStore.$state.items.length === 0"
    class="flex items-center justify-center bg-theme-primary text-white py-2 px-4 rounded-lg gap-2 max-w-xs mx-auto"
  >
    <p>هیچ محصولی در سبد شما نیست !</p>
    <ShoppingCartIcon class="size-5" />
  </div>

  <div v-else class="px-4 max-w-5xl mx-auto">
    <slot />
  </div>
</template>
