import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

import { FullLayout } from '../shared/styled'
import { getCurrentMonthDates } from '../shared/dates'
import { useAppDispatch, useAppSelector } from '../app/store'
import { TransactionList, transactionModel } from '../entities/transaction'
import { Colors } from '../shared/constants/Colors'

export function TransactionsScreen() {
  const { transactionsLoadingSelector, getTransactionsByRangeRequest } = transactionModel

  const loading = useAppSelector(transactionsLoadingSelector)
  const dispatch = useAppDispatch()

  const getTransactionsList = useCallback(() => {
    const { startDate, endDate } = getCurrentMonthDates()
    dispatch(getTransactionsByRangeRequest({ from: startDate, to: endDate }))
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
