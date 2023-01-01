import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RefreshControl, ScrollView } from 'react-native'

import { TransactionsItem } from '../../../shared/config/supabase/supabase.types'
import { TransactionCard } from './TransactionCard'
import { useAppDispatch } from '../../../app/store'
import { getTransactionsRequest } from '../transactionSlice.actions'
import { transactionsSelector, transactionsSumSelector } from '../transactionSlice.selectors'
import { TransactionTotal } from './TransactionTotal'

export const TransactionList: FC = () => {
  const [refreshing] = useState(false)

  const dispatch = useAppDispatch()
  const transactions = useSelector(transactionsSelector)
  const sum = useSelector(transactionsSumSelector)

  const refreshHandler = () => {
    dispatch(getTransactionsRequest())
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
    >
      <TransactionTotal total={sum} />
      {transactions.map((transaction: TransactionsItem) => (
        <TransactionCard transaction={transaction} key={transaction.id} />
      ))}
    </ScrollView>
  )
}
