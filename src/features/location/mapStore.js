// In mapStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMapStore = defineStore('map', () => {
  const lat = ref(null)
  const lng = ref(null)
  let map = null // <-- plain variable, not ref

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

  return { lat, lng, setMap, getMap, setCoords, removeMap }
})
