<script setup>
import BackButton from '@/components/ui/BackButton.vue'

defineProps({
  secButtonComp: Object,
  title: String,
})
</script>

<template>
  <header class="relative flex items-center my-6 justify-between">
    <BackButton />
    <p class="font-bold md:text-lg absolute left-1/2 -translate-x-1/2 m-0 right-auto">
      <slot />
    </p>
    <component v-if="secButtonComp" :is="secButtonComp" />
  </header>
</template>
