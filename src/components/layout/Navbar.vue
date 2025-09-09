<script setup>
import AlertIcon from '@/components/icons/AlertIcon.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'
import HomeIcon from '@/components/icons/HomeIcon.vue'
import ShopIcon from '@/components/icons/ShopIcon.vue'
</script>

<template>
  <div class="fixed bottom-0 w-dvw flex justify-center md:hidden">
    <ul class="flex items-center w-dvw h-20 justify-evenly bg-white rounded-t-4xl shadow-2xl">
      <li>
        <span></span>
        <a href="/">
          <HomeIcon :active="true" />
        </a>
      </li>
      <li>
        <a href="/">
          <HeartIcon />
        </a>
      </li>
      <li>
        <a href="/">
          <ShopIcon />
        </a>
      </li>
      <li>
        <a href="/">
          <AlertIcon />
        </a>
      </li>
    </ul>
  </div>
</template>
