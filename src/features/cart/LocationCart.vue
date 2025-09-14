<script setup>
import EditIcon from '@/components/icons/EditIcon.vue'
import Location from '../location/Location.vue'
import NoteCart from './NoteCart.vue'
import { useCartStore } from '@/store/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div class="mb-6">
    <p class="font-bold mb-1">آدرس تحویل</p>
    <p v-if="cartStore.selectedAddress.address" class="text-gray-subtext text-sm mb-4">
      {{ cartStore.selectedAddress.address }}
    </p>
    <p v-else class="text-red-600 text-sm mb-4 animate-pulse">لطفا یک آدرس انتخاب کنید</p>
    <div class="flex gap-2">
      <Location>
        <div
          class="h-full bg-white flex items-center gap-1 rounded-full border-1 py-1.5 px-2 border-gray-subtext"
        >
          <button class="text-xs">تغییر آدرس</button>
          <EditIcon />
        </div>
      </Location>
      <NoteCart />
    </div>
  </div>
</template>
