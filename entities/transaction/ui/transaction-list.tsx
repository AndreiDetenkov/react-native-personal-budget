import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RefreshControl, ScrollView, View } from 'react-native'
import { Link } from '@react-navigation/native'
import styled from 'styled-components'

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
        <Wrapper>
          <MainTitle>Recent Transactions</MainTitle>
          <Link to="">See All&nbsp;&#10095;</Link>
        </Wrapper>
      </Container>
      {transactions.map((transaction: TransactionsItem) => (
        <TransactionCard transaction={transaction} key={transaction.id} />
      ))}
    </ScrollView>
  )
}

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid coral;
`
