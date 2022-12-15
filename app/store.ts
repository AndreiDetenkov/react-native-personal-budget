import { configureStore } from '@reduxjs/toolkit'
import {
  transactionStateReducer,
  translationStateName,
} from '../features/transaction/transactionSlice'

export const store = configureStore({
  reducer: {
    [translationStateName]: transactionStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
