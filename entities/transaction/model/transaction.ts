import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TransactionsItem, TransactionsResponseSuccess } from '../../../shared/config/supabase/supabase.types'
import { getTransactionsByRangeRequest } from './transaction.actions'

export interface TransactionsState {
  transactions: TransactionsItem[]
  isLoading: boolean
}

const initialState: TransactionsState = {
  transactions: [],
  isLoading: false,
}

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionsByRangeRequest.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getTransactionsByRangeRequest.fulfilled,
        (state, action: PayloadAction<TransactionsResponseSuccess>) => {
          state.isLoading = false
          // @ts-ignore
          state.transactions = action.payload
        }
      )
  },
})

export type TransactionSliceMapType = {
  [transactionSlice.name]: TransactionsState
}
export const { reducer: transactionStateReducer, name: translationStateName } = {
  ...transactionSlice,
}
