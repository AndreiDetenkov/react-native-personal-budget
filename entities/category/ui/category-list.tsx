import React, { FC } from 'react'
import styled from 'styled-components'

import { Pressable, ScrollView, Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { categoriesSelector, setCategory } from '../model'

export const CategoryList: FC = () => {
  const dispatch = useAppDispatch()
  const { categories } = useAppSelector(categoriesSelector)

  const pressHandler = (categoryId: string): void => {
    dispatch(setCategory(categoryId))
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories &&
        categories.map(({ id, title, isPressed }) => (
          <Pressable onPress={() => pressHandler(id)} key={id}>
            <Chip style={{ backgroundColor: isPressed ? '#bb86fc' : '#eee' }}>
              <ChipLabel style={{ color: isPressed ? '#fff' : '#000021' }}>{title}</ChipLabel>
            </Chip>
          </Pressable>
        ))}
    </ScrollView>
  )
}

const Chip = styled(View)`
  height: 32px;
  padding: 0 16px;
  text-align: center;
  margin-right: 16px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ChipLabel = styled(Text)`
  font-size: 13px;
`
