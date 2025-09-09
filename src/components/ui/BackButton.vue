<script setup>
import { useRouter } from 'vue-router'
import BackIcon from '../icons/BackIcon.vue'
const router = useRouter()

function handleBackClick() {
  router.back()
}
</script>

<template>
  <button @click="handleBackClick">
    <BackIcon />
  </button>
</template>
