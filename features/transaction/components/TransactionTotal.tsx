import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  total: number
}

export const TransactionTotal: FC<Props> = ({ total }) => {
  return (
    <Card>
      <Title>Expense:</Title>
      <Total>{total}&nbsp;сом</Total>
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
  color: #333;
`

const Total = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  color: #333;
`
