<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineProps({
  categories: {
    type: Array,
    required: true,
  },
})

const router = useRouter()
const route = useRoute()
const routeCategory = computed(() => route?.query?.category)

function handleFilterClick(filter) {
  router.replace({ path: '/', query: { category: filter } })
}
</script>

<template>
  <li
    :class="[
      'py-1 px-2 rounded-md',
      routeCategory === 'all' || !routeCategory
        ? 'bg-theme-primary text-white'
        : 'text-theme-foreground-light bg-theme-foreground-list',
    ]"
  >
    <button @click="() => handleFilterClick('all')">همه قهوه‌ها</button>
  </li>
  <li
    v-for="category in categories"
    :key="category.id"
    :class="[
      'py-1 px-2 rounded-md',
      Number(routeCategory) === category.id
        ? 'bg-theme-primary text-white'
        : 'text-theme-foreground-light bg-theme-foreground-list',
    ]"
  >
    <button @click="() => handleFilterClick(category.id)" class="whitespace-nowrap" onclick="">
      {{ category.name }}
    </button>
  </li>
</template>

<style lang="scss" scoped></style>
