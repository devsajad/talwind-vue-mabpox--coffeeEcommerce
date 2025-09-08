<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['categoryClick'])
</script>

<template>
  <li class="bg-theme-primary text-white py-1 px-2 rounded-md">
    <button @click="emit('categoryClick', 'all')" class="font-bold text-sm whitespace-nowrap">
      همه قهوه‌ها
    </button>
  </li>
  <li
    v-for="category in categories"
    :key="category.id"
    class="py-1 px-2 rounded-md bg-theme-foreground-list"
  >
    <button
      @click="emit('categoryClick', category.id)"
      class="whitespace-nowrap text-theme-foreground-light"
      onclick=""
    >
      {{ category.name }}
    </button>
  </li>
</template>

<style lang="scss" scoped></style>
