import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RefreshControl, ScrollView } from 'react-native'

import { TransactionsItem } from '../../../shared/config/supabase/supabase.types'
import { TransactionCard } from './TransactionCard'
import { TransactionTotal } from './TransactionTotal'
import { transactionsSelector, transactionsSumSelector } from '../transactionSlice.selectors'

interface Props {
  getData: () => void
}
export const TransactionList: FC<Props> = ({ getData }) => {
  const [refreshing] = useState(false)

  const transactions = useSelector(transactionsSelector)
  const sum = useSelector(transactionsSumSelector)

  const refreshHandler = () => getData()

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
