<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Categories />
    <ProductItems />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Categories from './Categories.vue'
import ProductItems from './ProductItems.vue'

const CategoryFilter = ref('all')

function setCategoryFilter(id) {
  CategoryFilter.value = id
}
</script>

<style lang="scss" scoped></style>
