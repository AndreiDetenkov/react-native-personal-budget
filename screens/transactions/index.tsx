import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { FullLayout } from '../../shared/styled'
import { Colors } from '../../shared/constants/Colors'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { TransactionList } from '../../entities/transaction/ui/TransactionList'
import { transactionsLoadingSelector } from '../../entities/transaction/transactionSlice.selectors'
import { getTransactionsRequest } from '../../entities/transaction/transactionSlice.actions'
import { categoryModel } from '../../entities/category'

export function TransactionsScreen() {
  const { getCategoriesRequest } = categoryModel
  const dispatch = useAppDispatch()
  const loading = useAppSelector(transactionsLoadingSelector)

  useEffect(() => {
    dispatch(getTransactionsRequest())
    dispatch(getCategoriesRequest())
  }, [])

  return (
    <FullLayout>
      <SafeAreaView>
        {loading ? <ActivityIndicator size="large" color={Colors.primary} /> : <TransactionList />}
      </SafeAreaView>
    </FullLayout>
  )
}
