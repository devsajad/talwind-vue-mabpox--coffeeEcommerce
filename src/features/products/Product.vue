<template>
  <div class="mb-30 md:mb-0">
    <Categories @categoryClick="handleCategoryClick" />
    <ProductItems :CategoryFilter="CategoryFilter" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Categories from '@/features/products/Categories.vue'
import ProductItems from '@/features/products/ProductItems.vue'

const CategoryFilter = ref('all')

function handleCategoryClick(id) {
  CategoryFilter.value = id
}
</script>
