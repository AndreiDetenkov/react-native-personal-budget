import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTransactions, getTransactionsByRange } from '../../models/transactions'
import { TransactionsItem, TransactionsResponseSuccess } from '../../config/supabase/supabase.types'
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
>('transactions/getByRange', async ({ from, to }, thunkApi) => {
  const { data } = await getTransactionsByRange({ from, to })
  return data
})
