import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from '../ui/styles'

interface Props {
  total: string
}

export const CardTotal: FC<Props> = ({ total }) => {
  return (
    <Container>
      <Card>
        <Text>Итого:</Text>
        <Total>{total}&nbsp;сом</Total>
      </Card>
    </Container>
  )
}

const Card = styled(View)`
  margin-bottom: 24px;
  padding: 16px;
  border: 1px solid lightgrey;
  border-radius: 8px;
`
const Total = styled(Text)`
  font-size: 24px;
  font-weight: 600;
`
