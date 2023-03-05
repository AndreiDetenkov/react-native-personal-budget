import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'

import { CardIcon, CardText, CardValue, Colors } from '../../../shared'
import { ICategoriesWithValue } from '../model'

interface Props {
  item: ICategoriesWithValue
}
export const CategoryCard: FC<Props> = ({ item }): JSX.Element => {
  const { icon, title, value } = item

  return (
    <Card>
      <CardIcon>
        <Image source={{ uri: icon }} style={{ width: 28, height: 28 }} />
      </CardIcon>

      <CardText>
        <Title>{title}</Title>
      </CardText>

      <CardValue>
        <Value>{value}c</Value>
      </CardValue>
    </Card>
  )
}

const Card = styled(View)`
  border: 1px solid ${Colors.secondary};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  margin-bottom: 16px;
`

const Title = styled(Text)`
  font-size: 16px;
  color: ${Colors.text};
`

const Value = styled(Text)`
  font-size: 16px;
  font-weight: 500;
`
