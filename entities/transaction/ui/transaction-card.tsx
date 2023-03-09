import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'

import { CardIcon, CardText, CardValue, Colors, formatDate } from '../../../shared'
import { TransactionsItem } from '../api'

interface TransactionCardProps {
  transaction: TransactionsItem
}

export const TransactionCard: FC<TransactionCardProps> = ({
  transaction: {
    name,
    value,
    categories: { title, icon },
    created_at,
  },
}): JSX.Element => {
  const createdDate = formatDate(created_at)

  return (
    <Card>
      <CardIcon>
        <Image source={{ uri: icon }} style={{ width: 28, height: 28 }} />
      </CardIcon>

      <CardText>
        <Title>{name}</Title>
        <Category>{title}</Category>
      </CardText>

      <Amount>
        <Value>{value}c</Value>
        <Date>{createdDate}</Date>
      </Amount>
    </Card>
  )
}

const Card = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
`

const Title = styled(Text)`
  font-size: 16px;
  color: ${Colors.text};
`
const Category = styled(Text)`
  font-size: 12px;
  color: grey;
`
const Value = styled(Text)`
  font-size: 16px;
`

const Date = styled(Text)`
  font-size: 10px;
  color: grey;
`

const Amount = styled(CardValue)`
  padding-bottom: 2px;
`
