<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mb-30 md:mb-0">
    <Categories @categoryClick="handleCategoryClick" />
    <ProductItems :CategoryFilter="CategoryFilter" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Categories from './Categories.vue'
import ProductItems from './ProductItems.vue'

const CategoryFilter = ref('all')

function handleCategoryClick(id) {
  CategoryFilter.value = id
}
</script>
