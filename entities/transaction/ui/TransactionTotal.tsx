import { Text, View } from 'react-native'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Colors } from '../../../shared/constants/Colors'

import { formattedDate } from '../../../shared/dates'

interface Props {
  total: number
}

export const TransactionTotal: FC<Props> = ({ total }) => {
  const currentDate = formattedDate('MMMM YYYY')
  return (
    <Card>
      <Title>Expense</Title>
      <Total>{total}&nbsp;сом</Total>
      <Date>{currentDate}</Date>
    </Card>
  )
}

const Card = styled(View)`
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`
const Title = styled(Text)`
  text-transform: uppercase;
  color: ${Colors.text};
`

const Total = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  color: ${Colors.text};
`

const Date = styled(Text)`
  color: ${Colors.text};
`
