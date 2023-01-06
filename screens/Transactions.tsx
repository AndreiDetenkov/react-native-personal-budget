import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { FullLayout } from '../shared/styled'
import { Colors } from '../shared/constants/Colors'
import { useAppDispatch, useAppSelector } from '../app/store'
import { TransactionList } from '../entities/transaction/ui/transaction-list'
import { transactionsLoadingSelector } from '../entities/transaction/model/transaction.selectors'
import { getTransactionsByRangeRequest } from '../entities/transaction/model/transaction.actions'
import { categoryModel } from '../entities/category'
import { getCurrentMonthDates } from '../shared/dates'

export function TransactionsScreen() {
  const { getCategoriesRequest } = categoryModel
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
