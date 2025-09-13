<script setup>
import { getCategories } from '@/services/api'
import { onMounted, ref } from 'vue'
import CategoriesLoading from '@/features/products/productCategories/CategoriesLoading.vue'
import CategoriesItems from '@/features/products/productCategories/CategoriesItems.vue'

const categories = ref([])
const error = ref(null)
const loading = ref(false)

onMounted(async () => {
  try {
    loading.value = true
    const categoriesApi = await getCategories()

    if (categoriesApi.length > 0) {
      categories.value = categoriesApi
    } else error.value = 'هیچ دسته بندی پیدا نشد'
  } catch (error) {
    console.error(error)
    error.value = 'مشکلی پیش‌اومده! لطفا اینترنت رو بررسی و دوباره امتحان کن'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <ul
    class="flex w-full overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden pt-6 pb-3 px-6 items-center gap-4 lg:justify-center"
  >
    <CategoriesLoading v-if="loading" />
    <CategoriesItems v-else-if="categories" :categories="categories" />
  </ul>
</template>
