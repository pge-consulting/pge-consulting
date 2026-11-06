import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://aoccjukkftefxsrwfcjz.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_RfdXRuog2DAhM5dE1K1_sA_XenKxVwi'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
