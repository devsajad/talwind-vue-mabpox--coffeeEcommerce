<script setup>
import Select from '@/components/ui/select/Select.vue'
import SelectContent from '@/components/ui/select/SelectContent.vue'
import SelectGroup from '@/components/ui/select/SelectGroup.vue'
import SelectItem from '@/components/ui/select/SelectItem.vue'
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue'
import SelectValue from '@/components/ui/select/SelectValue.vue'
import { getAddresses } from '@/services/api'
import { useAuthstore } from '@/store/authStore'
import { useCartStore } from '@/store/cartStore'
import { PlusCircleIcon } from 'lucide-vue-next'
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const addresses = ref([])
const router = useRouter()
const authStore = useAuthstore()
const cartStore = useCartStore()

watchEffect(async () => {
  if (authStore.user) {
    addresses.value = await getAddresses(authStore.user.id)
    console.log(addresses)
  }
})

function handleClickAddAddress() {
  router.push('/location')
}

function handleSelectAddress(selectedId) {
  const selected = addresses.value.find((addr) => addr.id === selectedId)
  console.log(selected)
  if (selected) {
    cartStore.setAddress(selected)
  }
}
</script>

<template>
  <div>
    <p v-if="!$slots.default" class="text-theme-foreground-list">موقعیت مکانی</p>
    <Select dir="rtl" @update:modelValue="handleSelectAddress">
      <SelectTrigger
        :isShowIcon="!$slots.default"
        class="shadow-none border-none! p-0 justify-start focus-visible:ring-0"
      >
        <SelectValue
          v-if="!$slots.default"
          class="text-gray-subtext"
          :placeholder="cartStore?.selectedAddress?.address || 'یک آدرس انتخاب کنید'"
        />
        <slot v-else />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem class="mb-1" v-for="addr in addresses" :key="addr.id" :value="addr.id">
            <p class="truncate max-w-[220px]">
              {{ addr.address }}
            </p>
          </SelectItem>
          <button
            @click="handleClickAddAddress"
            class="cursor-pointer flex mx-auto items-center gap-2 bg-theme-primary w-full justify-center text-white rounded-md py-2"
          >
            <p class="text-sm">افزودن آدرس</p>
            <PlusCircleIcon class="text-white size-4" />
          </button>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
