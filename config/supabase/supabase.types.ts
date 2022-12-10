import { getCategories, getTransactions } from '../../models/transactions'
import { Database } from './database.types'

type Categories = Database['public']['Tables']['categories']['Row']
export type Transaction = Database['public']['Tables']['transactions']['Row']

type TransactionsResponse = Awaited<ReturnType<typeof getTransactions>>
export type TransactionsResponseSuccess = TransactionsResponse['data'] & { categories: Categories }
export type TransactionsResponseError = TransactionsResponse['error']

type CategoriesResponse = Awaited<ReturnType<typeof getCategories>>
export type CategoriesResponseSuccess = CategoriesResponse['data']
export type CategoriesList = {
  id: string
  title: string
  isPressed?: boolean
}

export interface CreateTransactionPayload {
  name: string
  value: number
  category_id: string
}
