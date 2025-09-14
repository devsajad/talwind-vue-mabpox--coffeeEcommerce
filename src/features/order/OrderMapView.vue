<script setup>
import Spinner from '@/components/ui/Spinner.vue'
import { MAPBOX_KEY, STORE_COORDINATES } from '@/constants'
import { createCustomMarker } from '@/lib/utils'
import { getDirections } from '@/services/api'
import mapboxgl from 'mapbox-gl'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  destinationCoords: {
    type: Object,
    required: true,
  },
})

const mapContainer = ref(null)
const isLoading = ref(true)
const error = ref(null)
const travelTime = ref(0)
let map = null

// const travelTimeInMinutes = computed(() => {
//   if (travelTime.value === 0) return 0
//   return Math.round(travelTime.value / 60)
// })

const isDesktop = window.innerWidth >= 768

const paddingView = isDesktop ? { bottom: 330, top: 210 } : { right: 30, left: 30, bottom: 250 }

onMounted(() => {
  if (!mapContainer.value) return

  mapboxgl.accessToken = MAPBOX_KEY

  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [STORE_COORDINATES.lng, STORE_COORDINATES.lat],
    zoom: 10,
  })

  map.on('load', async () => {
    try {
      isLoading.value = true
      const { geometry, duration } = await getDirections(STORE_COORDINATES, props.destinationCoords)
      travelTime.value = duration

      createCustomMarker(map, STORE_COORDINATES, 'store-marker')
      new mapboxgl.Marker({ color: '#c67c4e' }).setLngLat(props.destinationCoords).addTo(map)

      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: geometry,
        },
      })

      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#c67c4e',
          'line-width': 5,
          'line-opacity': 0.85,
        },
      })

      const bounds = new mapboxgl.LngLatBounds(STORE_COORDINATES, props.destinationCoords)
      map.fitBounds(bounds, { padding: paddingView })
    } catch (err) {
      console.error(err)
      error.value = 'Could not display the route.'
    } finally {
      isLoading.value = false
    }
  })
})

onUnmounted(() => {
  if (map) {
    map.remove()
  }
})
</script>

<template>
  <div class="relative h-dvh w-full">
    <div ref="mapContainer" class="w-full h-dvh rounded-xl"></div>

    <div v-if="isLoading" class="absolute right-1/2 translate-x-1/2 top-22/100">
      <spinner />
    </div>
  </div>
</template>
