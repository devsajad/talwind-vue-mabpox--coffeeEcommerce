<template>
  <div
    v-if="products"
    class="grid grid-cols-2 gap-4 md:gap-6 px-6 mt-3 md:grid-cols-4 max-w-5xl mx-auto"
  >
    <div v-for="product in products" :key="product.id" class="bg-white py-3 px-2.5 rounded-2xl">
      <div class="rounded-2xl overflow-hidden mb-4">
        <img :src="product.image_url" :alt="product.name + 'coffee image'" class="w-full" />
      </div>

      <div class="space-y-1 mb-2">
        <p class="font-medium text-sm">{{ product.name }}</p>
        <p class="text-xs font-light text-gray-subtext">{{ product.categories.name }}</p>
      </div>

      <div class="flex items-center justify-between">
        <template v-if="product.on_sale">
          <p class="font-medium">
            {{ product.price + ' تومان' }}
          </p>
          <button
            class="bg-theme-primary text-white w-8 h-8 rounded-lg text-xl flex items-center justify-center"
          >
            <PlusIcon />
          </button>
        </template>

        <p v-else class="font-medium text-[#ED5151]">ناموجود</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProductsWithCategory } from '@/services/api'
import { onMounted, ref } from 'vue'
import PlusIcon from './icons/PlusIcon.vue'

const products = ref([])
const error = ref('')
const loading = ref(false)

onMounted(async () => {
  try {
    loading.value = true

    const productsApi = await getProductsWithCategory()
    console.log(productsApi)
    if (productsApi.length === 0) error.value = 'هیچ محصولی پیدا نشد !'
    else products.value = productsApi
  } catch (error) {
    console.error(error)
    error.value = 'مشکلی پیش‌اومده! لطفا دوباره امتحان کن'
  } finally {
    loading.value = false
  }
})
</script>
