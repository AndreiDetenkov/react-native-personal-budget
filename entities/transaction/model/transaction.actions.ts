import { createAsyncThunk } from '@reduxjs/toolkit'

import { getTransactionsByRange, TransactionByRangePayload } from '../api'
import { TransactionsResponseSuccess } from '../../../shared/config/supabase/supabase.types'

export const getTransactionsByRangeRequest = createAsyncThunk<
  TransactionsResponseSuccess,
  TransactionByRangePayload
>('transactions/getByRange', async ({ from, to }) => {
  const { data } = await getTransactionsByRange({ from, to })
  return data
})
