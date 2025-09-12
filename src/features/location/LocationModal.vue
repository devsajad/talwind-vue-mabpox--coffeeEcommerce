<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import mapboxgl from 'mapbox-gl'
import { useAuthstore } from '@/store/authStore'
import { addAddress } from '@/services/api'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { watch } from 'vue'
import { nextTick } from 'vue'

const emit = defineEmits(['address-saved', 'update:open'])
const props = defineProps({
  open: Boolean,
})

const authStore = useAuthstore()

// State for the form and map
const mapContainer = ref(null)
const address = ref('')
const lat = ref(0)
const lng = ref(0)
let map = null

onMounted(() => {
  // Mapbox initialization logic will go in a watcher
  // to ensure it runs when the modal becomes visible.
})

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      nextTick(() => {
        initializeMap()
      })
    }
  },
)

function initializeMap() {
  if (map || !mapContainer.value) return // Don't initialize twice

  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2FqYWR6YXJlIiwiYSI6ImNsN2QzMHduaTFqaHAzdm5nNmtlYnB0dmcifQ.pp_81OMy1gIPbCVZOl_bVA'

  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [51.389, 35.6892],
    zoom: 12,
  })

  // When the map moves, update our lat/lng refs
  map.on('move', () => {
    const center = map.getCenter()
    lat.value = center.lat
    lng.value = center.lng
  })
}

async function handleSaveAddress() {
  if (!address.value.trim() || !authStore.isLoggedIn) {
    alert('Please enter a valid address.')
    return
  }

  try {
    const newAddress = {
      user_id: authStore.user.id,
      address: address.value,
      lat: parseFloat(lat.value),
      lng: parseFloat(lng.value),
    }
    await addAddress(newAddress)
    emit('address-saved')
    emit('update:open', false)
  } catch (error) {
    alert('Failed to save address.')
    console.error(error)
  }
}

// Clean up the map instance when the component is destroyed
onUnmounted(() => {
  if (map) {
    map.remove()
  }
})
</script>

<template>
  <Dialog :open="open" @update:open="(value) => emit('update:open', value)">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>افزودن آدرس جدید</DialogTitle>
        <DialogDescription>
          نشانگر را روی نقشه جابجا کرده و آدرس دقیق خود را وارد کنید.
        </DialogDescription>
      </DialogHeader>

      <div class="relative w-full h-64 rounded-md overflow-hidden">
        <div ref="mapContainer" class="w-full h-full"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src="/marker-icon.png" alt="Map Marker" class="w-4 h-4" />
        </div>
      </div>

      <div class="grid gap-4 py-4">
        <div class="flex flex-col gap-2">
          <label for="address">آدرس کامل</label>
          <Input id="address" v-model="address" placeholder="مثال: مشهد، صیاد شیرازی ۵" />
        </div>
        <p class="text-xs text-gray-500">Lat: {{ lat.toFixed(4) }}, Lng: {{ lng.toFixed(4) }}</p>
      </div>

      <DialogFooter>
        <Button @click="handleSaveAddress"> ذخیره آدرس </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
