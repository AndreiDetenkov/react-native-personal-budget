import { configureStore } from '@reduxjs/toolkit'
import {
  transactionStateReducer,
  translationStateName,
} from '../features/transaction/transactionSlice'
import { categoryStateName, categoryStateReducer } from '../features/category/categorySlice'

export const store = configureStore({
  reducer: {
    [translationStateName]: transactionStateReducer,
    [categoryStateName]: categoryStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
