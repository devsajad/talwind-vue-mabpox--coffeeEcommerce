<script setup>
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
  <div>Order page</div>
</template>
