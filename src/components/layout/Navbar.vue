<script setup>
import AlertIcon from '@/components/icons/AlertIcon.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'
import HomeIcon from '@/components/icons/HomeIcon.vue'
import ShopIcon from '@/components/icons/ShopIcon.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="fixed bottom-0 w-dvw flex justify-center md:hidden">
    <ul class="flex items-center w-dvw h-20 justify-evenly bg-white rounded-t-4xl shadow-2xl">
      <li>
        <RouterLink to="/">
          <HomeIcon :active="route.path === '/'" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/fav">
          <HeartIcon :active="route.path === '/fav'" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/order">
          <ShopIcon :active="route.path === '/order'" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/alerts">
          <AlertIcon :active="route.path === '/alerts'" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
