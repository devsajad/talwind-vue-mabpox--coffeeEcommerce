<script setup>
import Header from '@/components/layout/header/Header.vue'
import Spinner from '@/components/ui/Spinner.vue'
import { useAuthstore } from '@/store/authStore'
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const authStore = useAuthstore()
const router = useRouter()

const email = ref('')
const password = ref('')

const isLoading = ref(false)
const error = ref(null)

async function handleLogin() {
  isLoading.value = true
  error.value = null
  try {
    await authStore.signIn(email.value, password.value)
    router.push('/')
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto h-dvh px-5 flex justify-center flex-col">
    <Header>ورود به حساب</Header>

    <form
      @submit.prevent="handleLogin"
      class="flex-1 flex flex-col mt-10 items-center max-w-lg mx-auto w-full"
    >
      <div class="space-y-6 border rounded-xl bg-white w-full px-3 py-6">
        <div class="space-y-3 text-xl">
          <p class="text-sm text-center text-gray-subtext">خوش‌برگشتی! لطفا اطلاعاتت رو وارد کن</p>
        </div>

        <div class="flex flex-col space-y-3">
          <label for="email" class="font-medium">آدرس ایمیل</label>
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
          <label for="password" class="font-medium">رمز عبور</label>
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

        <div>
          <button
            type="submit"
            class="btn-primary w-full py-3 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
            :disabled="isLoading"
          >
            <Spinner v-if="isLoading" />
            <span v-else>وارد شوید</span>
          </button>
        </div>

        <div class="mt-3">
          <p class="text-center text-sm">
            حساب‌کاربری نداری ؟
            <RouterLink to="/signup" class="font-medium text-[#c67c4e] hover:underline"
              >ثبت‌نام کن</RouterLink
            >
          </p>
        </div>
      </div>
    </form>
  </div>
</template>
