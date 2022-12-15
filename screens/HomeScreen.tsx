import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator } from 'react-native'

import { RootTabScreenProps } from '../types'
import { FullLayout } from '../ui/styles'
import { Colors } from '../constants/Colors'
import { CardTotal } from '../components/CardTotal'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getTransactionsRequest } from '../features/transaction/transactionSlice.actions'
import { TransactionList } from '../features/transaction/components/TransactionList'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const isLoading = useAppSelector(({ transactions }) => transactions.isLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTransactionsRequest())
  }, [])

  return (
    <FullLayout>
      <SafeAreaView>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <>
            <CardTotal total="154357" />
            <TransactionList />
          </>
        )}
      </SafeAreaView>
    </FullLayout>
  )
}
