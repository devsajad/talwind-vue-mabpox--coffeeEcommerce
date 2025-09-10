<script setup>
import EditIcon from '@/components/icons/EditIcon.vue'
import NoteIcon from '@/components/icons/NoteIcon.vue'
import Header from '@/components/layout/header/Header.vue'
import Seprator from '@/components/ui/Seprator.vue'
import ChangeQuantity from '@/features/products/productDetails/ChangeQuantity.vue'
import { useCartStore } from '@/store/cartStore'

defineProps({
  secButtonComp: Object,
})

const cartStore = useCartStore()
</script>

<template>
  <div class="px-4">
    <Header>
      <p class="font-bold md:text-lg">سفارشات</p>
    </Header>
    <!-- Address section -->
    <div class="mb-6">
      <p class="font-bold mb-1">آدرس تحویل</p>
      <p class="text-gray-subtext text-sm mb-4">مشهد،خیام 1 ، پلاک 32</p>
      <div class="flex gap-2">
        <div class="flex items-center gap-1 rounded-full border-1 py-1.5 px-2 border-gray-subtext">
          <button class="bg-white text-xs">تغییر آدرس</button>
          <EditIcon />
        </div>
        <div class="flex items-center gap-1 rounded-full border-1 py-1.5 px-2 border-gray-subtext">
          <button class="bg-white text-xs">تغییر آدرس</button>
          <NoteIcon />
        </div>
      </div>
    </div>

    <Seprator width="90%" class="mb-4" />

    <!-- Product Items -->
    <template v-if="cartStore.$state.items.length !== 0">
      <div v-for="product in cartStore.$state.items" :key="product.id" class="flex gap-4 space-y-4">
        <img
          :src="product.image_url"
          alt=""
          class="object-center rounded-lg"
          width="54"
          height="54"
        />

        <div>
          <p class="font-bold">{{ product.name }}</p>
          <p class="text-gray-subtext text-sm">{{ product.categories.name }}</p>
        </div>

        <div class="mr-auto">
          <ChangeQuantity :product="product" />
        </div>
      </div>

      <Seprator width="90%" class="" />

      <!-- Price Section -->
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
  </div>
</template>
