<template>
  <div class="mb-30 lg:mb-0">
    <Categories @categoryClick="handleCategoryClick" />
    <Products :CategoryFilter="CategoryFilter" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Categories from '@/features/products/Categories.vue'
import Products from '@/features/products/Products.vue'

const CategoryFilter = ref('all')

function handleCategoryClick(id) {
  CategoryFilter.value = id
}
</script>
