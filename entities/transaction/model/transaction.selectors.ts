import { createSelector } from '@reduxjs/toolkit'

import { TransactionSliceMapType } from './transaction'
import { TransactionsItem } from '../../../shared/config/supabase/supabase.types'

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

export const transactionsByCategory = createSelector(
  (state: TransactionSliceMapType) => state.transactions.transactions,
  (transactions) => {
    let array: string[] = []
    let result = [] as any

    transactions.forEach(({ category_id, categories, value }: TransactionsItem) => {
      if (!array.includes(category_id)) {
        array.push(category_id)
        result.push({ category_id, categories, value })
        return
      }

      const found = result.find((item: TransactionsItem) => item.category_id === category_id)
      if (found) found.value += value
    })

    return result
  }
)
