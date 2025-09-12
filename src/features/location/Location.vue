<script setup>
import Select from '@/components/ui/select/Select.vue'
import SelectContent from '@/components/ui/select/SelectContent.vue'
import SelectGroup from '@/components/ui/select/SelectGroup.vue'
import SelectItem from '@/components/ui/select/SelectItem.vue'
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue'
import SelectValue from '@/components/ui/select/SelectValue.vue'
import { getAddresses } from '@/services/api'
import { PlusCircleIcon } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const addresses = ref([])
const router = useRouter()

async function fetchAddresses() {
  addresses.value = await getAddresses()
}

function handleClickAddAddress() {
  router.push('/location')
}

onMounted(() => {
  fetchAddresses()
})
</script>

<template>
  <div>
    <p v-if="!$slots.default" class="text-theme-foreground-list">موقعیت مکانی</p>
    <Select dir="rtl">
      <SelectTrigger
        :isShowIcon="!$slots.default"
        class="shadow-none border-none! p-0 justify-start focus-visible:ring-0"
      >
        <SelectValue
          v-if="!$slots.default"
          class="text-gray-subtext max-w-[220px]"
          placeholder="یک آدرس انتخاب کنید"
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
