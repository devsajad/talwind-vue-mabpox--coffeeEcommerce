<script setup>
import PlusIcon from '@/components/icons/PlusIcon.vue'
import { useCartStore } from '@/store/cartStore'
import { computed } from 'vue'
import ChangeQuantity from './productDetails/ChangeQuantity.vue'

const props = defineProps({
  product: Object,
})
const cartStore = useCartStore()

const isAddedToCart = computed(() => {
  return cartStore.$state.items.find((item) => item.id === props.product.id)
})

function handleCartClick(product) {
  cartStore.addToCart(product)
}
</script>

<template>
  <div class="bg-white py-3 px-2.5 rounded-2xl">
    <RouterLink :to="`product/${product.id}`">
      <div class="rounded-2xl overflow-hidden mb-4">
        <img :src="product.image_url" :alt="product.name + 'coffee image'" class="w-full" />
      </div>

      <div class="space-y-1 mb-2">
        <p class="font-medium text-sm">{{ product.name }}</p>
        <p class="text-xs font-light text-gray-subtext">{{ product.categories.name }}</p>
      </div>

      <div class="flex items-center justify-between">
        <template v-if="product.on_sale">
          <p class="font-medium">
            {{ product.price + ' تومان' }}
          </p>

          <button
            v-if="!isAddedToCart"
            @click.prevent.stop="() => handleCartClick(product)"
            class="bg-theme-primary text-white w-8 h-8 rounded-lg text-xl flex items-center justify-center"
          >
            <PlusIcon />
          </button>
          <ChangeQuantity v-else :product="product" class="gap-2.5!" />
        </template>

        <p v-else class="font-medium text-[#ED5151]">ناموجود</p>
      </div>
    </RouterLink>
  </div>
</template>
