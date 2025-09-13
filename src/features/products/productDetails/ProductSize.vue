<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function handleClickSize(size) {
  router.replace({ query: { ...route.query, size } })
}
</script>

<template>
  <div>
    <p class="font-bold mb-4">سایز</p>
    <div class="flex gap-4 justify-center">
      <button
        @click="() => handleClickSize('small')"
        :class="[
          'px-11 py-2.5 rounded-xl',
          {
            ' bg-theme-primary-lighter ring-1 ring-theme-primary text-theme-primary':
              route.query.size === 'small',
          },
          {
            'bg-white ring-1 ring-theme-foreground-lighter': route.query.size !== 'small',
          },
        ]"
      >
        S
      </button>
      <button
        @click="() => handleClickSize('medium')"
        :class="[
          'px-11 py-2.5 rounded-xl',
          {
            ' bg-theme-primary-lighter ring-1 ring-theme-primary text-theme-primary':
              route.query.size === 'medium',
          },
          {
            'bg-white ring-1 ring-theme-foreground-lighter': route.query.size !== 'medium',
          },
        ]"
      >
        M
      </button>
      <button
        @click="() => handleClickSize('large')"
        :class="[
          'px-11 py-2.5 rounded-xl',
          {
            ' bg-theme-primary-lighter ring-1 ring-theme-primary text-theme-primary':
              route.query.size === 'large',
          },
          {
            'bg-white ring-1 ring-theme-foreground-lighter': route.query.size !== 'large',
          },
        ]"
      >
        L
      </button>
    </div>
  </div>
</template>
