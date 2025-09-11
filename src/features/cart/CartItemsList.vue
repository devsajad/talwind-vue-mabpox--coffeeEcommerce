<script setup>
import Seprator from '@/components/ui/Seprator.vue'
import ChangeQuantity from '@/features/products/productDetails/ChangeQuantity.vue'
import { useCartStore } from '@/store/cartStore'
const cartStore = useCartStore()
</script>

<template>
  <div v-for="product in cartStore.$state.items" :key="product.id" class="flex gap-4 space-y-4">
    <img :src="product.image_url" alt="" class="object-center rounded-lg" width="54" height="54" />

    <div>
      <p class="font-bold">{{ product.name }}</p>
      <p class="text-gray-subtext text-sm">{{ product.categories.name }}</p>
    </div>

    <div class="mr-auto">
      <ChangeQuantity :product="product" />
    </div>
  </div>
  <Seprator width="90%" />
</template>
