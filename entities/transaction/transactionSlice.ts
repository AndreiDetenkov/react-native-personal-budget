import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TransactionsResponseSuccess } from '../../config/supabase/supabase.types'
import { getTransactionsRequest } from './transactionSlice.actions'
import { TransactionState } from './transactionSlice.types'

const initialState: TransactionState = {
  transactions: [],
  isLoading: false,
}

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionsRequest.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getTransactionsRequest.fulfilled,
        (state, action: PayloadAction<TransactionsResponseSuccess>) => {
          state.isLoading = false
          // @ts-ignore
          state.transactions = action.payload
        }
      )
  },
})

export type TransactionSliceMapType = {
  [transactionSlice.name]: TransactionState
}
export const { reducer: transactionStateReducer, name: translationStateName } = {
  ...transactionSlice,
}
