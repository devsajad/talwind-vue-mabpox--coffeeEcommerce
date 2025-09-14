<script setup>
import ArrowBottomIcon from '@/components/icons/ArrowBottomIcon.vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'
import Spinner from '@/components/ui/Spinner.vue'
import { placeOrder } from '@/services/api'
import { useAuthstore } from '@/store/authStore'
import { useCartStore } from '@/store/cartStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  isShowCartNav: Boolean,
})

const cartStore = useCartStore()
const authStore = useAuthstore()
const router = useRouter()
const error = ref()
const isLoading = ref()
const emit = defineEmits(['close'])

function handleCloseNav() {
  emit('close')
}

async function handlePlaceOrder() {
  if (!cartStore.selectedAddress) {
    alert('لطفا آدرس خود را انتخاب کنید')
    return
  }
  if (cartStore.items.length === 0) {
    alert('Your cart is empty.')
    return
  }
  isLoading.value = true
  error.value = null
  try {
    const orderData = {
      userId: authStore.user.id,
      addressId: cartStore.selectedAddress.id,
      cartItems: cartStore.items,
    }
    const newOrderId = await placeOrder(orderData)

    cartStore.clearCart()
    router.push(`/order/${newOrderId}`)
  } catch (err) {
    error.value = 'There was a problem placing your order. Please try again.'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div v-if="cartStore.$state.items.length !== 0" :class="'py-4 px-6 md:flex md:justify-between'">
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
      <button
        @click="handlePlaceOrder"
        class="btn-primary w-full md:w-sm py-4 mx-auto flex justify-center"
      >
        <span v-if="!isLoading"> تایید سفارش </span>
        <Spinner v-else />
      </button>
    </div>
  </div>
</template>
