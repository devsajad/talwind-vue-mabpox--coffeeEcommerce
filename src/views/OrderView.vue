<script setup>
import Header from '@/components/layout/header/Header.vue'
import OrderMapView from '@/features/order/OrderMapView.vue'
import { useOrderStore } from '@/store/orderStore'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const orderStore = useOrderStore()

onMounted(async () => {
  orderStore.fetchOrderDetails(route.params.id)
})
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <Header class="px-6">اطلاعات سفارش</Header>
    <OrderMapView
      v-if="orderStore?.currentOrder?.addresses"
      :destination-coords="{
        lat: orderStore.currentOrder.addresses.lat,
        lng: orderStore.currentOrder.addresses.lng,
      }"
    />
  </div>
</template>
