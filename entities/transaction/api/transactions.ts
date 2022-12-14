import { supabase } from '../../../shared/config'
import { CreateTransactionPayload, TransactionByRangePayload } from './transactions.types'

export async function getTransactions() {
  return supabase
    .from('transactions')
    .select(`id,name,value,created_at, categories(title,id,icon)`)
    .order('created_at', { ascending: false })
}

export async function getTransactionsByRange({ from, to }: TransactionByRangePayload) {
  return supabase
    .from('transactions')
    .select(`id,name,value,created_at,category_id, categories(id,title,icon)`)
    .gt('created_at', from)
    .lt('created_at', to)
    .order('created_at', { ascending: false })
}

export async function createTransaction(payload: CreateTransactionPayload) {
  return supabase.from('transactions').insert([payload])
}
