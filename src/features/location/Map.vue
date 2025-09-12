<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import mapboxgl from 'mapbox-gl'

const mapContainer = ref(null)
let map = null
const lat = ref(0)
const lng = ref(0)

onMounted(() => {
  if (map || !mapContainer.value) return

  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2FqYWR6YXJlIiwiYSI6ImNsN2QzMHduaTFqaHAzdm5nNmtlYnB0dmcifQ.pp_81OMy1gIPbCVZOl_bVA'

  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [51.389, 35.6892],
    zoom: 12,
  })

  map.on('move', () => {
    const center = map.getCenter()
    lat.value = center.lat
    lng.value = center.lng
  })
})

onUnmounted(() => {
  if (map) {
    map.remove()
  }
})
</script>

<template>
  <div ref="mapContainer" class="w-full h-70 rounded-xl overflow-hidden map-container relative">
    <div ref="mapContainer" class="w-full h-full"></div>
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <img src="/marker-icon.png" alt="Map Marker" class="w-5 z-1000" />
    </div>
  </div>
</template>
