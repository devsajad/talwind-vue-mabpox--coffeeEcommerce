<script setup>
import ArrowBottomIcon from '@/components/icons/ArrowBottomIcon.vue'
import CallIcon from '@/components/icons/CallIcon.vue'
import DeliveryIcon from '@/components/icons/deliveryIcon.vue'

const emit = defineEmits(['close'])

defineProps({
  isShowCartNav: Boolean,
})

function handleCloseNav() {
  emit('close')
}
</script>

<template>
  <div class="py-4 px-6 flex flex-col">
    <button
      :class="[
        'mr-auto duration-500',
        { 'rotate-0': isShowCartNav },
        { 'rotate-180': !isShowCartNav },
      ]"
      @click="handleCloseNav"
    >
      <ArrowBottomIcon />
    </button>
    <header class="text-center mb-6">
      <h2 class="font-bold">10 دقیقه زمان تحویل</h2>
      <p class="text-sm text-gray-subtext">
        تحویل به
        <span class="text-black font-bold">سجاد زارع</span>
      </p>
    </header>

    <img src="/timeLine.png" alt="image of timelines" height="4" width="315" class="mx-auto mb-6" />

    <div class="md:flex space-y-6 md:space-y-0 md:justify-center gap-3">
      <div class="px-3 py-4 border-1 rounded-xl flex items-center justify-center gap-2">
        <div class="border-1 rounded-xl">
          <DeliveryIcon />
        </div>
        <div>
          <h2 class="font-bold">آماده‌سازی و تحویل</h2>
          <p class="text-gray-subtext text-sm">
            خرید شما را به شما در کوتاه‌ترین زمان ممکن تحویل خواهیم داد
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center gap-4 md:px-3 md:py-4 md:border-1 md:rounded-xl">
        <img src="/Avatar.jpg" alt="avatar of personal courier" width="56" height="56" />
        <div>
          <p class="font-bold">کامیار کامل</p>
          <p class="text-sm text-gray-subtext">پیک شخصی شما</p>
        </div>
        <a class="p-2 5 rounded-xl border-1 mr-auto" :href="'tel:09123456789'">
          <CallIcon />
        </a>
      </div>
    </div>
  </div>
</template>
