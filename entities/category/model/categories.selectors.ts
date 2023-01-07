import { createSelector } from '@reduxjs/toolkit'

import { CategoryStateMapType } from './categories'
import { ICategoriesWithValue } from './categories.types'
import { transactionModel, TransactionsItem } from '../../transaction'

export const categoryListSelector = createSelector(
  (state: CategoryStateMapType) => state.categories.categories,
  (categories) => categories
)

export const categoryIdSelector = createSelector(
  (state: CategoryStateMapType) => state.categories.categories,
  (categories) => {
    return categories.find((category) => category.isPressed)?.id
  }
)

const categoriesWithValues = createSelector(
  (state: CategoryStateMapType) => state.categories.categories,
  (categories) => {
    return categories.map(({ id, title, icon }) => {
      return { id, title, icon, value: 0 }
    })
  }
)

export const categoriesWithValue = createSelector(
  categoriesWithValues,
  (state: transactionModel.TransactionSliceMapType) => state.transactions.transactions,
  (categories: ICategoriesWithValue[], transactions: TransactionsItem[]) => {
    transactions.forEach(({ category_id, value }) => {
      const category = categories && categories.find(({ id }) => id === category_id)
      if (category !== undefined) {
        category.value += value
      }
    })
    return categories
  }
)
