import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTransactions, getTransactionsByRange } from '../../models/transactions'
import { TransactionsResponseSuccess } from '../../shared/config/supabase/supabase.types'
import { TransactionByRangePayload } from './transactionSlice.types'

export const getTransactionsRequest = createAsyncThunk<TransactionsResponseSuccess>(
  'transactions/getAll',
  async () => {
    const { data } = await getTransactions()
    return data
  }
)

export const getTransactionsByRangeRequest = createAsyncThunk<
  TransactionsResponseSuccess,
  TransactionByRangePayload
>('transactions/getByRange', async ({ from, to }) => {
  const { data } = await getTransactionsByRange({ from, to })
  return data
})
