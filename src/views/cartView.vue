<script setup>
import Header from '@/components/layout/header/Header.vue'
import CartContainer from '@/features/cart/CartContainer.vue'
import CarteItemsPrice from '@/features/cart/CarteItemsPrice.vue'
import CartItemsContainer from '@/features/cart/CartItemsContainer.vue'
import CartItemsList from '@/features/cart/CartItemsList.vue'
import LocationCart from '@/features/cart/LocationCart.vue'
</script>

<template>
  <Header> سفارشات </Header>
  <CartContainer>
    <LocationCart />

    <CartItemsContainer>
      <CartItemsList />
      <CarteItemsPrice />
    </CartItemsContainer>
  </CartContainer>
</template>
