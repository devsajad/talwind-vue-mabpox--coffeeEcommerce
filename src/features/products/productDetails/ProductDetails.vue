<script setup>
import ProductIcons from '@/components/icons/ProductIcons.vue'
import Seprator from '@/components/ui/Seprator.vue'
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
  <main v-if="product" class="md:flex gap-12 pb-40">
    <div class="w-full h-50.5 md:h-80 rounded-xl relative overflow-hidden mb-4">
      <img
        :src="product.image_url"
        :alt="product.name + 'coffee image'"
        class="absolute object-cover object-center w-full h-full"
      />
    </div>

    <div class="flex flex-col gap-6 justify-center">
      <!-- name and category section -->
      <div>
        <p class="font-bold text-xl">{{ product.name }}</p>
        <div class="flex items-center justify-between">
          <p class="text-gray-subtext font-light">{{ product.categories.name }}</p>
          <ProductIcons />
        </div>
        <Seprator width="90%" height="1px" class="my-4" />
      </div>
      <!-- Descriptin section -->
      <div>
        <p class="font-bold mb-1">توضیحات</p>
        <p class="text-gray-subtext">{{ product.description }}</p>
      </div>

      <!-- size section -->
      <div>
        <p class="font-bold mb-4">سایز</p>
        <div class="flex gap-4 justify-center">
          <button class="px-11 py-2.5 bg-white rounded-xl ring-1 ring-theme-foreground-lighter">
            S
          </button>
          <button
            class="px-11 py-2.5 rounded-xl bg-theme-primary-lighter ring-1 ring-theme-primary text-theme-primary"
          >
            M
          </button>
          <button class="px-11 py-2.5 bg-white rounded-xl ring-1 ring-theme-foreground-lighter">
            L
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
