import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ActivityIndicator, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { RootTabScreenProps } from '../types'
import { FullLayout } from '../ui/styles'
import { Colors } from '../constants/Colors'
import { CardTotal } from '../components/CardTotal'
import { useAppDispatch } from '../app/hooks'
import { getTransactionsRequest } from '../features/transaction/transactionSlice.actions'
import { TransactionList } from '../features/transaction/components/TransactionList'
import {
  transactionsLoadingSelector,
  transactionsSumSelector,
} from '../features/transaction/transactionSlice.selectors'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const dispatch = useAppDispatch()
  const sum = useSelector(transactionsSumSelector)
  const loading = useSelector(transactionsLoadingSelector)

  useEffect(() => {
    dispatch(getTransactionsRequest())
  }, [])

  return (
    <FullLayout>
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <>
            <CardTotal total={sum} />
            <TransactionList />
          </>
        )}
      </SafeAreaView>
    </FullLayout>
  )
}
