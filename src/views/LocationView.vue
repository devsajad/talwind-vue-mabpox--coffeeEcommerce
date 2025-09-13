<script setup>
import Header from '@/components/layout/header/Header.vue'
import Map from '@/features/location/Map.vue'

function handleClickGetLocation() {}
</script>

<template>
  <div class="max-w-4xl mx-auto px-6">
    <Header>افزودن آدرس</Header>
    <div>
      <p class="text-sm text-gray-subtext text-center mb-3">
        <span> نشانگر را روی نقشه جابجا کنید</span> و آدرس دقیق خود را وارد کنید
      </p>

      <Map />

      <form class="mt-6 flex items-center">
        <div class="flex flex-col gap-3 grow-1">
          <label for="address" class="font-bold text-sm">آدرس کامل</label>
          <input
            id="address"
            type="text"
            class="bg-white py-3 border px-4 rounded-xl placeholder:text-sm"
            placeholder="آدرس کامل خود را وارد "
            required
          />
        </div>
        <button
          class="btn-primary py-3 px-2 rounded-lg self-end mr-3"
          @click="handleClickGetLocation"
        >
          مکان فعلی
        </button>
      </form>
    </div>
  </div>
</template>
