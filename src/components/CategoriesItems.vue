<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <li class="bg-theme-primary text-white py-1 px-2 rounded-md">
    <a class="font-bold text-sm whitespace-nowrap">همه قهوه‌ها</a>
  </li>
  <li
    v-for="category in categories"
    :key="category.id"
    class="py-1 px-2 rounded-md bg-theme-foreground-list"
  >
    <button class="whitespace-nowrap text-theme-foreground-light" onclick="">{{ category.name }}</button>
  </li>
</template>

<style lang="scss" scoped></style>
