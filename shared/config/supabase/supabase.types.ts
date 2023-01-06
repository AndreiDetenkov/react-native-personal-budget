import { getTransactionsByRange } from '../../../entities/transaction/api'
import { Database } from './database.types'

type Transaction = Database['public']['Tables']['transactions']['Row']
type Categories = Database['public']['Tables']['categories']['Row']

type TransactionsResponse = Awaited<ReturnType<typeof getTransactionsByRange>>
export type TransactionsResponseSuccess = TransactionsResponse['data']
export interface TransactionsItem extends Transaction {
  categories: Categories
}
