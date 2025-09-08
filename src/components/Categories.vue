<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { getCategories } from '@/services/api'
import { onMounted, ref } from 'vue'
import CategoriesLoading from './CategoriesLoading.vue'
import CategoriesItems from './CategoriesItems.vue'

const categories = ref([])
const error = ref(null)
const loading = ref(false)
const emit = defineEmits(['categoryClick'])

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
    class="flex w-full overflow-x-scroll overflow-y-hidden md:overflow-x-hidden pt-6 pb-3 px-6 items-center gap-4 md:justify-center"
  >
    <CategoriesLoading v-if="loading" />
    <CategoriesItems
      @categoryClick="emit('categoryClick', $event)"
      v-else-if="categories"
      :categories="categories"
    />
  </ul>
</template>
