import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'
import { TransactionsItem } from '../../../shared/config/supabase/supabase.types'

interface Props {
  transaction: TransactionsItem
}

export const TransactionCard: FC<Props> = ({ transaction }) => {
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
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: lightgrey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
`

const CardIcon = styled(View)`
  display: flex;
  flex: 0.2;
  justify-content: center;
  align-items: flex-start;
`

const CardText = styled(View)`
  display: flex;
  flex: 1;
`

const CardValue = styled(View)`
  display: flex;
  align-items: flex-end;
  flex: 0.3;
`

const Title = styled(Text)`
  font-size: 16px;
  color: #333;
`
const Category = styled(Text)`
  font-size: 12px;
  color: grey;
`
const Value = styled(Text)`
  font-size: 16px;
`
