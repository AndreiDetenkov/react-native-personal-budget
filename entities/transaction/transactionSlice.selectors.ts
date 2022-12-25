import { createSelector } from '@reduxjs/toolkit'

import { TransactionSliceMapType } from './transactionSlice'

export const transactionsSelector = createSelector(
  (state: TransactionSliceMapType) => state.transactions.transactions,
  (transactions) => transactions
)

export const transactionsLoadingSelector = createSelector(
  (state: TransactionSliceMapType) => state.transactions.isLoading,
  (isLoading) => isLoading
)

export const transactionsSumSelector = createSelector(
  (state: TransactionSliceMapType) => state.transactions.transactions,
  (transactions) => {
    return transactions.reduce((acc, item) => {
      return acc + item.value
    }, 0)
  }
)
