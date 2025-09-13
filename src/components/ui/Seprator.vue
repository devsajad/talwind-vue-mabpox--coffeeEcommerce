<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: '100%',
  },
  height: {
    type: [String, Number],
    default: '1px',
  },
})
</script>

<template>
  <div
    :style="{
      width: typeof width === 'number' ? width + 'px' : width,
      height: typeof height === 'number' ? height + 'px' : height,
    }"
    class="bg-theme-foreground-lighter mx-auto"
  ></div>
</template>
