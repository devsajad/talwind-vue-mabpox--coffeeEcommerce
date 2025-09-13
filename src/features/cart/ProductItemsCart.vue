<script setup></script>

<template v-if="cartStore.$state.items.length !== 0">
  <div v-for="product in cartStore.$state.items" :key="product.id" class="flex gap-4 space-y-4">
    <img :src="product.image_url" alt="" class="object-center rounded-lg" width="54" height="54" />

    <div>
      <p class="font-bold">{{ product.name }}</p>
      <p class="text-gray-subtext text-sm">{{ product.categories.name }}</p>
    </div>

    <div class="mr-auto">
      <ChangeQuantity :product="product" />
    </div>
  </div>
</template>
