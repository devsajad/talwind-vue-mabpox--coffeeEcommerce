<script setup>
import Seprator from '@/components/ui/Seprator.vue'
import { useCartStore } from '@/store/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <template v-if="cartStore.$state.items.length !== 0">
    <Seprator width="90%" class="mb-4" />
    <slot />
  </template>
</template>
