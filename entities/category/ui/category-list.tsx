import React, { FC } from 'react'
import styled from 'styled-components'

import { Pressable, ScrollView, Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { categoryListSelector, setCategory } from '../model'
import { Colors } from '../../../shared'

export const CategoryList: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(categoryListSelector)

  const pressHandler = (categoryId: string): void => {
    dispatch(setCategory(categoryId))
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories &&
        categories.map(({ id, title, isPressed }) => (
          <Pressable onPress={() => pressHandler(id)} key={id}>
            <Chip style={{ backgroundColor: isPressed ? '#bb86fc' : '#f1f1f1' }}>
              <ChipLabel style={{ color: isPressed ? '#fff' : '#000021' }}>{title}</ChipLabel>
            </Chip>
          </Pressable>
        ))}
    </ScrollView>
  )
}

const Chip = styled(View)`
  padding: 16px 24px;
  text-align: center;
  margin-right: 16px;
  border-radius: 16px;
  border: 1px solid ${Colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`

const ChipLabel = styled(Text)`
  font-size: 16px;
`
