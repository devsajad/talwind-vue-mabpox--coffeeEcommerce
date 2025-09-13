<script setup>
import Header from '@/components/layout/header/Header.vue'
import LocationForm from '@/features/location/LocationForm.vue'
import Map from '@/features/location/Map.vue'
</script>

<template>
  <div class="max-w-4xl mx-auto px-6">
    <Header>افزودن آدرس</Header>
    <Map />
    <LocationForm />
  </div>
</template>
