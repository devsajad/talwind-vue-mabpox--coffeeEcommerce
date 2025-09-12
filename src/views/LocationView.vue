<script setup>
import Header from '@/components/layout/header/Header.vue'
import Map from '@/features/location/Map.vue'
</script>

<template>
  <div class="max-w-5xl mx-auto px-6">
    <Header>افزودن آدرس</Header>
    <div>
      <p class="text-sm text-gray-subtext text-center mb-3">
        <span> نشانگر را روی نقشه جابجا کنید</span> و آدرس دقیق خود را وارد کنید
      </p>
      <Map />
    </div>
  </div>
</template>
