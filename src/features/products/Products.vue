<script setup>
import { getProductsWithCategory } from '@/services/api'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ProductItem from './ProductItem.vue'

const products = ref([])
const error = ref('')
const loading = ref(false)
const route = useRoute()

const filteredProducts = computed(() => {
  if (!products.value) return null

  if (route.query.category === 'all' || !route?.query?.category) return products.value

  return products.value.filter((item) => item.category_id === Number(route.query.category))
})

onMounted(async () => {
  try {
    loading.value = true

    const productsApi = await getProductsWithCategory()
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

<template>
  <div
    v-if="filteredProducts"
    class="grid grid-cols-2 gap-4 md:gap-6 px-6 mt-3 md:grid-cols-4 max-w-5xl mx-auto"
  >
    <ProductItem v-for="product in filteredProducts" :key="product.id" :product=" product" />
  </div>
</template>
