import { createSelector } from '@reduxjs/toolkit'
import { CategoryStateMapType } from './categorySlice'

export const categoriesSelector = createSelector(
  (state: CategoryStateMapType) => state.categories.categories,
  (categories) => categories
)

export const categoryIdSelector = createSelector(
  (state: CategoryStateMapType) => state.categories.categories,
  (categories) => {
    const category = categories.find((category) => category.isPressed)
    return category?.id
  }
)
