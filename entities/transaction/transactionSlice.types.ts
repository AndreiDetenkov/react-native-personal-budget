import { TransactionsItem } from '../../config/supabase/supabase.types'

export interface TransactionState {
  transactions: TransactionsItem[]
  isLoading: boolean
}

export interface TransactionByRangePayload {
  from: string
  to: string
}
