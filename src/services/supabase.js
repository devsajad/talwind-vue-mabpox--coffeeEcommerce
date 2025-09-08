import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://toaiqxopnbzacxndveet.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvYWlxeG9wbmJ6YWN4bmR2ZWV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyNTgzNzgsImV4cCI6MjA3MjgzNDM3OH0._RfrS8HhRERzuPfqKcmNQvtZ_3Bu29i13ZhMTYCxcS4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
