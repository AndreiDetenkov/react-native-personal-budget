import { getTransactions } from '../../models/transactions'
import { Database } from './database.types'

type Categories = Database['public']['Tables']['categories']['Row']
export type Transaction = Database['public']['Tables']['transactions']['Row']

type TransactionsResponse = Awaited<ReturnType<typeof getTransactions>>
export type TransactionsResponseSuccess = TransactionsResponse['data'] & { categories: Categories }
export type TransactionsResponseError = TransactionsResponse['error']
