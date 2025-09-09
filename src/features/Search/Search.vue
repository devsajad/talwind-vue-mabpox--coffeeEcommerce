<script setup lang="ts">
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
} from '@/components/ui/combobox'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-vue-next'
import SettingIcon from '@/components/icons/SettingIcon.vue'
import { ref, watch } from 'vue'
import { searchProductsByName } from '@/services/api'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const isLoading = ref(false)
const serachResultProducts = ref([])
let debounceTimer = null
let abortController = null
const router = useRouter()

watch(searchQuery, () => {
  clearTimeout(debounceTimer)

  if (abortController) {
    abortController.abort()
  }

  debounceTimer = setTimeout(async () => {
    if (searchQuery.value.trim().length === 0) {
      serachResultProducts.value = []
      return
    }

    abortController = new AbortController()

    try {
      isLoading.value = true
      const result = await searchProductsByName(searchQuery.value, {
        signal: abortController.signal,
      })

      serachResultProducts.value = result
    } catch (error) {
      if (error && error.code !== '20') {
        console.error(error)
        serachResultProducts.value = []
      }
    } finally {
      isLoading.value = false
    }
  }, 300)
})

function handleSelectSearch(id) {
  router.push({ path: `/product/${id}` })
}
</script>

<template>
  <div class="flex gap-4 justify-center max-w-4xl mx-auto">
    <Combobox by="label" dir="rtl" class="grow-1 w-full">
      <ComboboxAnchor class="bg-[#2A2A2A] w-full rounded-xl p-2">
        <div class="relative w-full items-center">
          <ComboboxInput class="pr-2 text-white" placeholder="جستجوی قهوه" v-model="searchQuery" />
        </div>
      </ComboboxAnchor>

      <ComboboxList>
        <ComboboxEmpty class="py-3">{{
          isLoading ? 'در حال جستجو ...' : 'هیچ نیجه‌ای پیدا نشد!'
        }}</ComboboxEmpty>

        <ComboboxGroup>
          <ComboboxItem
            v-for="product in serachResultProducts"
            class="cursor-pointer"
            :key="product.id"
            :value="product.name"
            @select="() => handleSelectSearch(product.id)"
          >
            {{ product.name }}

            <ComboboxItemIndicator>
              <Check :class="cn('ml-auto h-4 w-4')" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxList>
    </Combobox>
    <div class="w-13 h-13 bg-theme-primary rounded-xl flex items-center justify-center">
      <SettingIcon />
    </div>
  </div>
</template>
