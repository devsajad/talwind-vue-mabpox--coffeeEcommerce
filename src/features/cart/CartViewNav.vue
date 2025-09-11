<script setup>
import ArrowBottomIcon from '@/components/icons/ArrowBottomIcon.vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'
import { useCartStore } from '@/store/cartStore'

defineProps({
  isShowCartNav: Boolean,
})

const cartStore = useCartStore()
const emit = defineEmits(['close'])

function handleCloseNav() {
  emit('close')
}
</script>

<template>
  <div :class="'py-4 px-6 md:flex md:justify-between'">
    <div class="flex items-center gap-4 mb-2">
      <WalletIcon />
      <div>
        <p class="font-bold">پرداخت نقدی</p>
        <p class="text-sm text-theme-primary font-medium">{{ cartStore.cartTotalPrice }} تومان</p>
      </div>
      <button
        :class="[
          'mr-auto duration-500',
          { 'rotate-0': isShowCartNav },
          { 'rotate-180': !isShowCartNav },
        ]"
        @click="handleCloseNav"
      >
        <ArrowBottomIcon />
      </button>
    </div>
    <div class="text-center">
      <button class="btn-primary w-full md:w-sm py-4 mx-auto">تایید سفارش</button>
    </div>
  </div>
</template>
