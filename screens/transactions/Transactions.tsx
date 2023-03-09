import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

import { useAppDispatch, useAppSelector } from '../../app/store'
import { categoryModel } from '../../entities/category'
import { TransactionList, transactionModel } from '../../entities/transaction'
import { Colors, FullLayout, getCurrentMonthDates } from '../../shared'

export function TransactionsScreen() {
  const loading = useAppSelector(transactionModel.transactionsLoadingSelector)
  const dispatch = useAppDispatch()

  const getTransactionsList = useCallback(() => {
    const { startDate, endDate } = getCurrentMonthDates()
    dispatch(transactionModel.getTransactionsByRangeRequest({ from: startDate, to: endDate }))
    dispatch(categoryModel.getCategoriesRequest())
  }, [])

  useEffect(() => {
    getTransactionsList()
  }, [])

  return (
    <FullLayout>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <TransactionList getData={getTransactionsList} />
      )}
    </FullLayout>
  )
}
