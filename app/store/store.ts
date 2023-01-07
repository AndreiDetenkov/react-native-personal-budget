import { configureStore } from '@reduxjs/toolkit'
import { transactionModel } from '../../entities/transaction'
import { categoryModel } from '../../entities/category'

export const store = configureStore({
  reducer: {
    [transactionModel.transactionStateName]: transactionModel.transactionStateReducer,
    [categoryModel.categoryStateName]: categoryModel.categoryStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
