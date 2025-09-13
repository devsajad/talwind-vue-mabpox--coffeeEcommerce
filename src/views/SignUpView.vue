<script setup>
import Header from '@/components/layout/header/Header.vue'
import Spinner from '@/components/ui/Spinner.vue'
import { useAuthstore } from '@/store/authStore'

import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const authStore = useAuthstore()
const router = useRouter()

const fullName = ref('')
const phoneNumber = ref('')
const email = ref('')
const password = ref('')

const isLoading = ref(false)
const error = ref(null)
const successMessage = ref('')

async function handleSignUp() {
  isLoading.value = true
  error.value = null
  successMessage.value = ''
  try {
    await authStore.signUp(email.value, password.value, fullName.value, phoneNumber.value)
    successMessage.value = 'Success! Please check your email to verify your account.'
    router.push('/')
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto min-h-dvh px-5 flex justify-center flex-col">
    <Header>ثبت‌نام در سایت</Header>

    <form
      @submit.prevent="handleSignUp"
      class="flex-1 flex flex-col items-center max-w-lg mx-auto w-full"
    >
      <div class="space-y-6 border rounded-xl bg-white w-full px-3 py-6">
        <div class="text-xl">
          <p class="text-sm text-center text-gray-subtext">خوش‌اومدی! اطلاعات خودت رو وارد کن</p>
        </div>

        <div class="flex gap-2">
          <div class="flex flex-col space-y-3 w-49/100">
            <label for="fullName" class="font-bold text-sm">نام و نام خانوادگی</label>
            <input
              id="fullName"
              type="text"
              v-model="fullName"
              class="bg-white py-3 border px-4 rounded-xl placeholder:text-sm"
              placeholder="مثلا سجاد زارع"
              required
            />
          </div>

          <div class="flex flex-col space-y-3 w-49/100">
            <label for="phoneNumber" class="font-bold text-sm">شماره تلفن</label>
            <input
              id="phoneNumber"
              type="tel"
              v-model="phoneNumber"
              class="bg-white py-3 border px-4 rounded-xl placeholder:text-sm text-right"
              placeholder="09123456789"
              required
            />
          </div>
        </div>

        <div class="flex flex-col space-y-3">
          <label for="email" class="font-bold text-sm">آدرس ایمیل</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="bg-white py-3 border px-4 rounded-xl placeholder:text-sm"
            placeholder="ایمیل خود را وارد کنید"
            required
          />
        </div>

        <div class="flex flex-col space-y-3">
          <label for="password" class="font-bold text-sm">رمز عبور</label>
          <input
            id="password"
            type="password"
            v-model="password"
            class="bg-white py-3 px-4 rounded-xl border placeholder:text-sm"
            placeholder="••••••••"
            required
          />
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>

        <div v-if="successMessage" class="text-green-500 text-sm text-center">
          {{ successMessage }}
        </div>

        <div>
          <button
            type="submit"
            class="btn-primary w-full py-3 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
            :disabled="isLoading"
          >
            <Spinner v-if="isLoading" />
            <span v-else>ایجاد حساب</span>
          </button>
        </div>

        <div class="mt-3">
          <p class="text-center text-sm">
            قبلاً ثبت‌نام کردی؟
            <RouterLink to="/login" class="font-bold text-sm text-[#c67c4e] hover:underline"
              >وارد شو</RouterLink
            >
          </p>
        </div>
      </div>
    </form>
  </div>
</template>
