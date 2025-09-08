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
import SettingIcon from '../icons/SettingIcon.vue'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]
</script>

<template>
  <div class="flex gap-4 justify-center max-w-4xl mx-auto">
    <Combobox by="label" dir="rtl" class="grow-1 w-full">
      <ComboboxAnchor class="bg-[#2A2A2A] w-full rounded-xl p-2">
        <div class="relative w-full items-center">
          <ComboboxInput
            class="pr-2 text-white"
            :display-value="(val) => val?.label ?? ''"
            placeholder="جستجوی قهوه"
          />
        </div>
      </ComboboxAnchor>

      <ComboboxList>
        <ComboboxEmpty> هیچ نیجه‌ای پیدا نشد! </ComboboxEmpty>

        <ComboboxGroup>
          <ComboboxItem v-for="framework in frameworks" :key="framework.value" :value="framework">
            {{ framework.label }}

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
