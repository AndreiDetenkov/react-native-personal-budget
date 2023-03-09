import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CategoriesResponseSuccess } from '../api'
import { getCategoriesRequest } from './categories.actions'
import { CategoryState } from './categories.types'

const initialState: CategoryState = {
  categories: [],
}

export const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCategoriesRequest.fulfilled,
      (state, action: PayloadAction<CategoriesResponseSuccess>) => {
        // @ts-ignore
        state.categories = action.payload
      }
    )
  },
})

export type CategoryStateMapType = {
  [categories.name]: CategoryState
}

export const {
  reducer: categoryStateReducer,
  name: categoryStateName,
  actions: {},
} = { ...categories }
