import { createProfile } from '@/services/api'
import { supabase } from '@/services/supabase'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthstore = defineStore('auth', () => {
  const user = ref()
  const session = ref()

  function init() {
    supabase.auth.onAuthStateChange((event, newSession) => {
      user.value = newSession?.user ?? null
      session.value = newSession ?? null
    })
  }

  const isLoggedIn = computed(() => !!user.value)

  async function signUp(email, password, name, phoneNumber) {
    // 1. Sign up the user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          phone_number: phoneNumber,
        },
      },
    })
    if (authError) throw authError

    if (authData.user) {
      await createProfile(authData.user.id, {
        full_name: name,
        phone_number: phoneNumber,
      })
    }
  }

  async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return { user, session, isLoggedIn, init, signUp, signIn, signOut }
})
