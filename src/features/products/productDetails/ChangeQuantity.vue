<script setup>
import { useCartStore } from '@/store/cartStore'
import { Minus, Plus } from 'lucide-vue-next'
import { computed } from 'vue'
const props = defineProps({
  product: Object,
})
const cartStore = useCartStore()
const itemCount = computed(() =>
  cartStore.$state.items.find((item) => item.id === props.product.id),
)
</script>

<template>
  <div class="flex items-center gap-4.5">
    <button
      class="rounded-full border-1 p-1"
      @click.prevent.stop="() => cartStore.addToCart(product)"
    >
      <Plus class="size-4 md:size-5" />
    </button>
    <p>{{ itemCount.quantity }}</p>
    <button
      class="rounded-full border-1 p-1"
      @click.prevent.stop="() => cartStore.removeFromCart(product)"
    >
      <Minus class="size-4 md:size-5 rounded-full bg-white" />
    </button>
  </div>
</template>
