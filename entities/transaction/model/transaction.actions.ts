import { createAsyncThunk } from '@reduxjs/toolkit'

import { getTransactionsByRange, TransactionByRangePayload, TransactionsResponseSuccess } from '../api'

export const getTransactionsByRangeRequest = createAsyncThunk<
  TransactionsResponseSuccess,
  TransactionByRangePayload
>('transactions/getByRange', async ({ from, to }) => {
  const { data } = await getTransactionsByRange({ from, to })
  return data
})
