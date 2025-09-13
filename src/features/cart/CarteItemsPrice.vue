<script setup>
import { useCartStore } from '@/store/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div class="space-y-4">
    <p class="mt-6 font-bold">خلاصه سفارش</p>
    <div class="text-sm flex justify-between">
      <p>جمع قهوه‌ها</p>
      <p class="font-bold">{{ cartStore.cartTotalPrice }} تومان</p>
    </div>
    <div class="text-sm flex justify-between">
      <p>هزینه ارسال</p>
      <p class="font-bold">رایگان</p>
    </div>
  </div>
</template>
