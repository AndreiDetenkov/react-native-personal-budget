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
  reducers: {
    setCategory: (state: CategoryState, action: PayloadAction<string>) => {
      state.categories.forEach((item) => {
        item.isPressed = item.id === action.payload
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCategoriesRequest.fulfilled,
      (state, action: PayloadAction<CategoriesResponseSuccess>) => {
        // @ts-ignore
        state.categories = action.payload.map((item) => {
          return { ...item, isPressed: false }
        })
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
  actions: { setCategory },
} = { ...categories }
