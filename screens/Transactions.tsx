import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { FullLayout } from '../shared/styled'
import { Colors } from '../shared/constants/Colors'
import { getCurrentMonthDates } from '../shared/dates'
import { useAppDispatch, useAppSelector } from '../app/store'
import { TransactionList, transactionModel } from '../entities/transaction'
import { categoryModel } from '../entities/category'

export function TransactionsScreen() {
  const { getCategoriesRequest } = categoryModel
  const { transactionsLoadingSelector, getTransactionsByRangeRequest } = transactionModel

  const loading = useAppSelector(transactionsLoadingSelector)
  const dispatch = useAppDispatch()

  const getTransactionsList = useCallback(() => {
    const { startDate, endDate } = getCurrentMonthDates()
    dispatch(getTransactionsByRangeRequest({ from: startDate, to: endDate }))
  }, [])

  useEffect(() => {
    getTransactionsList()
    dispatch(getCategoriesRequest())
  }, [])

  return (
    <FullLayout>
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <TransactionList getData={getTransactionsList} />
        )}
      </SafeAreaView>
    </FullLayout>
  )
}
