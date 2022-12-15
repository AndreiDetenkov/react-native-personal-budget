import React, { FC, useState } from 'react'

import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { TransactionsItem } from '../../../config/supabase/supabase.types'
import { TransactionCard } from './TransactionCard'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getTransactionsRequest } from '../transactionSlice.actions'

export const TransactionList: FC = () => {
  const [refreshing] = useState(false)

  const transactions = useAppSelector(({ transactions }) => transactions.transactions)
  const dispatch = useAppDispatch()

  const refreshHandler = () => {
    dispatch(getTransactionsRequest())
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
    >
      {transactions.map((transaction: TransactionsItem) => (
        <TransactionCard transaction={transaction} key={transaction.id} />
      ))}
    </ScrollView>
  )
}
