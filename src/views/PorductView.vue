<script setup>
import Header from '@/components/layout/header/Header.vue'
import ProductDetailsContainer from '@/features/products/productDetails/ProductDetailsContainer.vue'
import ProductDetails from '@/features/products/productDetails/ProductDetails.vue'
</script>

<template>
  <ProductDetailsContainer>
    <Header />
    <ProductDetails />
  </ProductDetailsContainer>
</template>
