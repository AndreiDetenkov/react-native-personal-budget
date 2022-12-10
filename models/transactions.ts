import { supabase } from '../config/supabase/supabase'
import { CreateTransactionPayload } from '../config/supabase/supabase.types'

export async function getTransactions() {
  return supabase
    .from('transactions')
    .select(`id,name,value,created_at, categories(title,id,icon)`)
    .order('created_at', { ascending: false })
    .limit(20)
}

export async function getCategories() {
  return supabase.from('categories').select(`id,title`).order('title', { ascending: true })
}

export async function setTransaction(payload: CreateTransactionPayload) {
  return supabase.from('transactions').insert([payload])
}
