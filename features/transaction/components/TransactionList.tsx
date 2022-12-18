import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RefreshControl, ScrollView } from 'react-native'

import { TransactionsItem } from '../../../config/supabase/supabase.types'
import { TransactionCard } from './TransactionCard'
import { useAppDispatch } from '../../../app/hooks'
import { getTransactionsRequest } from '../transactionSlice.actions'
import { transactionsSelector } from '../transactionSlice.selectors'

export const TransactionList: FC = () => {
  const [refreshing] = useState(false)

  const dispatch = useAppDispatch()
  const transactions = useSelector(transactionsSelector)

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
