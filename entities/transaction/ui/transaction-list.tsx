import React, { FC, useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { Link } from '@react-navigation/native'
import styled from 'styled-components'

import { TransactionCard, TransactionTotal } from '../index'
import { transactionsSelector, transactionsSumSelector } from '../model'
import { TransactionsItem } from '../api'
import { Colors, Container, MainTitle } from '../../../shared'
import { useAppSelector } from '../../../app/store'

interface Props {
  getData: () => void
}
export const TransactionList: FC<Props> = ({ getData }): JSX.Element => {
  const sum = useAppSelector(transactionsSumSelector)
  const transactions = useAppSelector(transactionsSelector)

  const [refreshing] = useState(false)
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
          <Link to={{ screen: 'AllTransactions' }}>See All&nbsp;&#10095;</Link>
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
  color: ${Colors.text};
  cursor: pointer;
  margin-bottom: 20px;
`
