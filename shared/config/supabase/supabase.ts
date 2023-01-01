import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_SUPABASE_ANON_KEY, API_SUPABASE_URL } from '@env'
import { Database } from './database.types'

export const supabase = createClient<Database>(API_SUPABASE_URL, API_SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
