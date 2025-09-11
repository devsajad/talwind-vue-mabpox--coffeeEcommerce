<script setup>
import Select from '@/components/ui/select/Select.vue'
import SelectContent from '@/components/ui/select/SelectContent.vue'
import SelectGroup from '@/components/ui/select/SelectGroup.vue'
import SelectItem from '@/components/ui/select/SelectItem.vue'
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue'
import SelectValue from '@/components/ui/select/SelectValue.vue'
import { useSlots } from 'vue'

const $slots = useSlots()
</script>

<template>
  <div>
    <p v-if="!$slots.default" class="text-theme-foreground-list">موقعیت مکانی</p>
    <Select dir="rtl" class="text-[#D8D8D8] outline-none">
      <SelectTrigger
        :isShowIcon="!$slots.default"
        class="shadow-none border-none! p-0 justify-start focus-visible:ring-0"
      >
        <SelectValue
          v-if="!$slots.default"
          placeholder="مشهد ، صیادشیرازی"
          class="text-[#D8D8D8]"
        />
        <slot />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem class="px-8" value="firstAddress"> مشهد ، خیابان خیام </SelectItem>
          <SelectItem class="px-8" value="secAddress"> مشهد ، صیادشیرازی </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
x
