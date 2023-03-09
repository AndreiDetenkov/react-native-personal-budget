import { Text, View } from 'react-native'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Colors, formatDateByTemplate } from '../../../shared'

interface Props {
  total: number
}

export const TransactionTotal: FC<Props> = ({ total }): JSX.Element => {
  const currentDate = formatDateByTemplate('MMMM YYYY')
  const formattedTotal = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1 `)

  return (
    <Card>
      <Title>Expense</Title>
      <Total>{formattedTotal}&nbsp;сом</Total>
      <Date>{currentDate}</Date>
    </Card>
  )
}

const Card = styled(View)`
  padding: 8px;
  margin: 16px 16px 32px;
  border: 1px solid ${Colors.border};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
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
