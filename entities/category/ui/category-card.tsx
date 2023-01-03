import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'

import { CategoryItem } from '../api'
import { Colors } from '../../../shared/constants/Colors'
import { CardIcon, CardText, CardValue } from '../../../shared/styled'

type Props = {
  value: number
  categories: CategoryItem
}
export const CategoryCard: FC<Props> = (props) => {
  const {
    value,
    categories: { title, icon },
  } = props

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
  border: 1px solid lightgrey;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 16px;
`

const Title = styled(Text)`
  font-size: 18px;
  color: ${Colors.text};
`

const Value = styled(Text)`
  font-size: 18px;
`
