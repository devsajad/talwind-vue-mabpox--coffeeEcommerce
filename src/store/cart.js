import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // product details and quantity
  const items = ref([])

  function init() {
    const savedCart = localStorage.getItem('cartItems')
    if (savedCart) {
      try {
        items.value = JSON.parse(savedCart)
      } catch (e) {
        console.error('Error parsing cart from localStorage', e)
        localStorage.removeItem('cartItems') // Clear corrupted data
      }
    }
  }

  function addToCart(product) {
    const currentProduct = items.value.find((item) => item.id === product.id)
    if (!currentProduct) return items.value.push({ ...product, quantity: 1 })

    return currentProduct.quantity++
  }

  function removeFromCart(product) {
    const currentProduct = items.value.find((item) => item.id === product.id)
    if (currentProduct) return currentProduct.quantity--
  }

  function clearFromCart(productId) {
    items.value = items.value.filter((product) => product.id !== productId)
  }

  function clearCart() {
    items.value = []
  }

  const cartItemCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const cartTotalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  watch(
    items,
    (newItems) => {
      localStorage.setItem('cartItems', JSON.stringify(newItems))
    },
    { deep: true },
  )

  return {
    items,
    init,
    addToCart,
    removeFromCart,
    clearCart,
    cartItemCount,
    cartTotalPrice,
    clearFromCart,
  }
})
