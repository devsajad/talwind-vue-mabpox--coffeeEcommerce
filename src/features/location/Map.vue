<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import { useMapStore } from './mapStore'
import { MAPBOX_KEY } from '@/constants'

const mapContainer = ref(null)
const mapStore = useMapStore()

onMounted(() => {
  if (mapStore.map || !mapContainer.value) return

  mapboxgl.accessToken = MAPBOX_KEY
  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [51.389, 35.6892],
    zoom: 12,
  })
  mapStore.setMap(map)

  map.on('move', () => {
    const center = map.getCenter()
    mapStore.lat = center.lat
    mapStore.lng = center.lng
  })
})

onUnmounted(() => {
  mapStore.removeMap()
})
</script>

<template>
  <div class="w-full h-70 rounded-xl overflow-hidden map-container relative">
    <div ref="mapContainer" class="w-full h-full"></div>
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <img src="/marker-icon.png" alt="Map Marker" class="w-5 z-1000" />
    </div>
  </div>
</template>
