import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserOrders, getOrderById } from '@/services/api'

export const useOrderStore = defineStore('orders', () => {
  const orders = ref([])
  const currentOrder = ref(null)

  const isLoading = ref(false)
  const error = ref(null)


  async function fetchUserOrders() {
    isLoading.value = true
    error.value = null
    try {
      orders.value = await getUserOrders()
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }


  async function fetchOrderDetails(orderId) {
    isLoading.value = true
    error.value = null
    try {
      currentOrder.value = await getOrderById(orderId)
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }


  function clearOrders() {
    orders.value = []
    currentOrder.value = null
    error.value = null
  }

  return {
    orders,
    currentOrder,
    isLoading,
    error,
    fetchUserOrders,
    fetchOrderDetails,
    clearOrders,
  }
})
