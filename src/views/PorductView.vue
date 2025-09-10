<script setup>
import Header from '@/components/layout/header/Header.vue'
import ProductDetailsContainer from '@/features/products/productDetails/ProductDetailsContainer.vue'
import ProductDetails from '@/features/products/productDetails/ProductDetails.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'
</script>

<template>
  <ProductDetailsContainer>
    <Header :secButtonComp="HeartIcon"> جزئیات </Header>
    <ProductDetails />
  </ProductDetailsContainer>
</template>
