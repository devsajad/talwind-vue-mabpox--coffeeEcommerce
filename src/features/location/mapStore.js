import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMapStore = defineStore('map', () => {
  const lat = ref(null)
  const lng = ref(null)
  const address = ref('')
  let map = null

  function setMap(instance) {
    map = instance
  }
  function getMap() {
    return map
  }
  function removeMap() {
    if (map) {
      map.remove()
      map = null
    }
  }
  function setCoords(newLat, newLng) {
    lat.value = newLat
    lng.value = newLng
  }

  return { lat, lng, address, setMap, getMap, setCoords, removeMap }
})
