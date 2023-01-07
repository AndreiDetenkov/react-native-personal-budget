import { Database } from '../../../shared/config/supabase/database.types'
import { getTransactionsByRange } from './transactions'

type Transaction = Database['public']['Tables']['transactions']['Row']
type Categories = Database['public']['Tables']['categories']['Row']

type TransactionsResponse = Awaited<ReturnType<typeof getTransactionsByRange>>
export type TransactionsResponseSuccess = TransactionsResponse['data']
export interface TransactionsItem extends Transaction {
  categories: Categories
}

export interface TransactionByRangePayload {
  from: string
  to: string
}

export interface CreateTransactionPayload {
  name: string
  value: number
  category_id: string | undefined
}
