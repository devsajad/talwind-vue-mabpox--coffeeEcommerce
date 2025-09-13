<script setup>
import Spinner from '@/components/ui/Spinner.vue'
import { addAddress } from '@/services/api'
import { useAuthstore } from '@/store/authStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMapStore } from './mapStore'

const mapStore = useMapStore()
const userStore = useAuthstore()
const error = ref()
const isLoading = ref(false)
const router = useRouter()

async function handleAddressSubmit() {
  if (!mapStore.lat || !mapStore.lng) {
    error.value = 'لطفا با جابجا کردن نشانگر مکان خود را روی نقشه مشخص کنید'
    return
  }
  if (!userStore.$id || !mapStore.address) return

  try {
    isLoading.value = true
    await addAddress({
      address: mapStore.address,
      lat: mapStore.lat,
      lng: mapStore.lng,
      user_id: userStore.user.id,
    })
    router.push('/')
  } catch (error) {
    console.error(error)
    error.value = 'مشکلی پیش‌اومده! دوباره امتحان کن'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form class="mt-6 flex items-center" @submit.prevent="handleAddressSubmit">
    <div class="flex flex-col gap-3 grow-1">
      <label for="address" class="font-bold text-sm">آدرس کامل</label>
      <input
        v-model="mapStore.address"
        id="address"
        type="text"
        class="bg-white py-3 border px-4 rounded-xl placeholder:text-sm"
        placeholder="مثلا مشهد ،وکیل آباد 17 ، پلاک 201"
        required
      />
    </div>
    <button
      type="submit"
      class="btn-primary py-3 px-2 rounded-lg self-end mr-3"
      :disabled="isLoading"
    >
      <span v-if="!isLoading">ثبت آدرس</span>
      <div v-else class="flex gap-2">
        <span>در حال ثبت</span>
        <spinner />
      </div>
    </button>
  </form>
  <p v-if="error" class="text-red-600 text-sm mt-4">{{ error }}</p>
</template>
