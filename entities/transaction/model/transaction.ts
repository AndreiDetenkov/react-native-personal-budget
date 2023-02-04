import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getTransactionsByRangeRequest } from './transaction.actions'
import { TransactionsItem, TransactionsResponseSuccess } from '../api'

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
      .addCase(getTransactionsByRangeRequest.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export type TransactionSliceMapType = {
  [transactionSlice.name]: TransactionsState
}
export const { reducer: transactionStateReducer, name: transactionStateName } = {
  ...transactionSlice,
}
