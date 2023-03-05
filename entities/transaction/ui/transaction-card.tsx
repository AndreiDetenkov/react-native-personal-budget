import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'

import { CardIcon, CardText, CardValue, Colors } from '../../../shared'
import { TransactionsItem } from '../api'

interface Props {
  transaction: TransactionsItem
}

export const TransactionCard: FC<Props> = ({ transaction }): JSX.Element => {
  const {
    name,
    value,
    categories: { title, icon },
  } = transaction

  return (
    <Card>
      <CardIcon>
        <Image source={{ uri: icon }} style={{ width: 28, height: 28 }} />
      </CardIcon>

      <CardText>
        <Title>{name}</Title>
        <Category>{title}</Category>
      </CardText>

      <CardValue>
        <Value>{value}c</Value>
      </CardValue>
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
