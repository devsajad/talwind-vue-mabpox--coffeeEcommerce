<script setup>
import { getProductById } from '@/services/api'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref({})
const loading = ref(false)
const error = ref('')

watchEffect(async () => {
  const productId = route.params?.id
  if (!productId) return

  try {
    product.value = null
    error.value = null
    loading.value = true

    const productApi = await getProductById(productId)
    if (!productApi) throw new Error('قهوه‌ای که دنبالشی پیدا نشد !')

    product.value = productApi
  } catch (err) {
    console.error(err)
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div v-if="product" class="space-y-1 flex w-full justify-between px-6 py-4">
    <div>
      <p class="text-gray-subtext text-sm">قیمت</p>
      <p
        :class="[
          'text-theme-primary',
          'font-bold',
          'text-lg',
          { 'opacity-50 line-through': !product.on_sale },
        ]"
      >
        {{ product.price }} تومان
      </p>
    </div>
    <button
      class="bg-theme-primary text-white py-4 px-15 rounded-2xl disabled:cursor-not-allowed disabled:opacity-50"
      :disabled="!product.on_sale"
    >
      {{ product.on_sale ? 'افزودن به سبد' : 'ناموجود !' }}
    </button>
  </div>
</template>
