import { createSelector } from '@reduxjs/toolkit'
import { CategoryStateMapType } from './categorySlice'

export const categoryListSelector = createSelector(
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

export const categoriesSelector = createSelector(
  categoryListSelector,
  categoryIdSelector,
  (categories, categoryId) => ({
    categories,
    categoryId,
  })
)
