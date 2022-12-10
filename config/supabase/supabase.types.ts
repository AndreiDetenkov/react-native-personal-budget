import { getCategories, getTransactions } from '../../models/transactions'
import { Database } from './database.types'

type Transaction = Database['public']['Tables']['transactions']['Row']
type Categories = Database['public']['Tables']['categories']['Row']

type TransactionsResponse = Awaited<ReturnType<typeof getTransactions>>
export type TransactionsResponseSuccess = TransactionsResponse['data']
export interface TransactionsList extends Transaction {
  categories: Categories
}

type CategoriesResponse = Awaited<ReturnType<typeof getCategories>>
export type CategoriesResponseSuccess = CategoriesResponse['data']
export interface CategoriesList extends Categories {
  isPressed?: boolean
}

export interface CreateTransactionPayload {
  name: string
  value: number
  category_id: string
}
