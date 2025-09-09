<template>
  <div>
    <p class="text-theme-foreground-list">موقعیت مکانی</p>
    <Select dir="rtl" class="text-[#D8D8D8] outline-none">
      <SelectTrigger class="w-[180px] border-none px-0 justify-start focus-visible:ring-0">
        <SelectValue placeholder="مشهد ، صیادشیرازی" class="text-[#D8D8D8]" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="firstAddress"> مشهد ، خیابان خیام </SelectItem>
          <SelectItem value="secAddress"> مشهد ، صیادشیرازی </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
x

<script setup>
import Select from '@/components/ui/select/Select.vue'
import SelectContent from '@/components/ui/select/SelectContent.vue'
import SelectGroup from '@/components/ui/select/SelectGroup.vue'
import SelectItem from '@/components/ui/select/SelectItem.vue'
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue'
import SelectValue from '@/components/ui/select/SelectValue.vue'
</script>

<style lang="scss" scoped></style>
