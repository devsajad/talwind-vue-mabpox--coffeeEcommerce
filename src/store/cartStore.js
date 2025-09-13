import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const selectedAddress = ref()

  function setAddress(address) {
    selectedAddress.value = address
  }

  function init() {
    const savedCart = localStorage.getItem('cartItems')
    if (savedCart) {
      try {
        items.value = JSON.parse(savedCart)
      } catch (e) {
        console.error('Error parsing cart from localStorage', e)
        localStorage.removeItem('cartItems')
      }
    }
  }
  function addToCart(product) {
    const currentProduct = items.value.find((item) => item.id === product.id)
    if (currentProduct) {
      currentProduct.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }
  function removeFromCart(product) {
    const currentProduct = items.value.find((item) => item.id === product.id)
    if (!currentProduct) return

    const isLastItem = currentProduct.quantity === 1

    if (isLastItem) {
      clearFromCart(product.id)
    } else {
      currentProduct.quantity--
    }
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
    selectedAddress,
    setAddress,
  }
})
