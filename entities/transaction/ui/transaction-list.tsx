import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RefreshControl, ScrollView } from 'react-native'

import { TransactionCard } from './transaction-card'
import { transactionsSelector, transactionsSumSelector } from '../model'
import { TransactionsItem } from '../api'
import { Container, MainTitle } from '../../../shared/styled'
import { TransactionTotal } from './transaction-total'

interface Props {
  getData: () => void
}
export const TransactionList: FC<Props> = ({ getData }) => {
  const [refreshing] = useState(false)

  const sum = useSelector(transactionsSumSelector)
  const transactions = useSelector(transactionsSelector)

  const refreshHandler = () => getData()

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
    >
      <TransactionTotal total={sum} />
      <Container>
        <MainTitle>Recent Transactions</MainTitle>
      </Container>
      {transactions.map((transaction: TransactionsItem) => (
        <TransactionCard transaction={transaction} key={transaction.id} />
      ))}
    </ScrollView>
  )
}
