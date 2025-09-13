<script setup>
import AlertIcon from '@/components/icons/AlertIcon.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'
import HomeIcon from '@/components/icons/HomeIcon.vue'
import ShopIcon from '@/components/icons/ShopIcon.vue'
import Badge from '@/components/ui/Badge.vue'
import { useCartStore } from '@/store/cartStore'
import { computed } from 'vue'

const cartStore = useCartStore()
const cartCount = computed(() => {
  return cartStore.cartItemCount
})
</script>

<template>
  <ul class="flex items-center h-20 md:h-15 justify-evenly">
    <li>
      <RouterLink to="/" class="flex gap-2">
        <HomeIcon :active="$route.path === '/'" />
        <p
          :class="[
            'text-gray-subtext hidden md:block',
            { 'text-theme-primary font-bolds': $route.path === '/' },
          ]"
        >
          خانه
        </p>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/fav" class="flex gap-2">
        <HeartIcon :active="$route.path === '/fav'" />
        <p
          :class="[
            'text-gray-subtext hidden md:block',
            { 'text-theme-primary font-bolds': $route.path === '/fav' },
          ]"
        >
          علاقه‌مندی‌
        </p>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/cart" class="flex gap-2 relative">
        <Badge v-if="cartCount !== 0">
          {{ cartCount }}
        </Badge>
        <ShopIcon :active="$route.path === '/cart'" />
        <p
          :class="[
            'text-gray-subtext hidden md:block',
            { 'text-theme-primary font-bolds': $route.path === '/cart' },
          ]"
        >
          سبدخرید
        </p>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/alerts" class="flex gap-2">
        <AlertIcon :active="$route.path === '/alerts'" />
        <p
          :class="[
            'text-gray-subtext hidden md:block',
            { 'text-theme-primary font-bolds': $route.path === '/alerts' },
          ]"
        >
          اعلان
        </p>
      </RouterLink>
    </li>
  </ul>
</template>
