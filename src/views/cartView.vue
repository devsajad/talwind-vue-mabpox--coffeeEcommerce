<script setup>
import Header from '@/components/layout/header/Header.vue'
import CarteItemsPrice from '@/features/cart/CarteItemsPrice.vue'
import CartItemsContainer from '@/features/cart/CartItemsContainer.vue'
import CartItemsList from '@/features/cart/CartItemsList.vue'
import LocationCart from '@/features/cart/LocationCart.vue'

defineProps({
  secButtonComp: Object,
})
</script>

<template>
  <div class="px-4 max-w-5xl mx-auto">
    <Header> سفارشات </Header>
    <LocationCart />
    <CartItemsContainer>
      <CartItemsList />
      <CarteItemsPrice />
    </CartItemsContainer>
  </div>
</template>
