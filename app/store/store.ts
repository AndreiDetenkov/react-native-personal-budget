import { configureStore } from '@reduxjs/toolkit'
import { transactionStateReducer, translationStateName } from '../../entities/transaction/model/transaction'
import { categoryModel } from '../../entities/category'

export const store = configureStore({
  reducer: {
    [translationStateName]: transactionStateReducer,
    [categoryModel.categoryStateName]: categoryModel.categoryStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
