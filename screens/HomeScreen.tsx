import React, { useEffect } from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { RootTabScreenProps } from '../types'
import { FullLayout } from '../ui/styles'
import { Colors } from '../constants/Colors'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getTransactionsRequest } from '../features/transaction/transactionSlice.actions'
import { TransactionList } from '../features/transaction/components/TransactionList'
import { transactionsLoadingSelector } from '../features/transaction/transactionSlice.selectors'
import { getCategoriesRequest } from '../features/category/categorySlice.actions'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
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
