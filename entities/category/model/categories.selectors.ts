import { createSelector } from '@reduxjs/toolkit'

import { CategoryStateMapType } from './categories'
import { ICategoriesWithPressed, ICategoriesWithValue } from './categories.types'
import { transactionModel, TransactionsItem } from '../../transaction'
import { Categories } from '../api'

export const categoryListSelector = createSelector(
  (state: CategoryStateMapType) => state.categories.categories,
  (categories) => {
    return categories.map(({ id, title, icon }): ICategoriesWithPressed => {
      return { id, title, icon, isPressed: false }
    })
  }
)

const categoriesWithValues = createSelector(
  (state: CategoryStateMapType) => state.categories.categories,
  (categories) => {
    return categories.map(({ id, title, icon }: Categories): ICategoriesWithValue => {
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
      if (category) category.value += value
    })
    return categories
  }
)
