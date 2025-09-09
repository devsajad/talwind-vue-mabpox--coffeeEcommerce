<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Location from '@/features/location/Location.vue'
import Promo from './Promo.vue'
import Search from '@/features/Search/Search.vue'
</script>

<template>
  <div class="h-70 w-full bg-gradient-header drop-shadow-header p-6 space-y-6">
    <Location />
    <Search />
  </div>
  <Promo />
</template>
