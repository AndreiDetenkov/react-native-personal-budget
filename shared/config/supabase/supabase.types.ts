import { getTransactions } from '../../../models/transactions'
import { Database } from './database.types'

type Transaction = Database['public']['Tables']['transactions']['Row']
type Categories = Database['public']['Tables']['categories']['Row']

type TransactionsResponse = Awaited<ReturnType<typeof getTransactions>>
export type TransactionsResponseSuccess = TransactionsResponse['data']
export interface TransactionsItem extends Transaction {
  categories: Categories
}

export interface CreateTransactionPayload {
  name: string
  value: number
  category_id: string | undefined
}
