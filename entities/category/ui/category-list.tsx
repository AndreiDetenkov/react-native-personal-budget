import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native'
import { useAppSelector } from '../../../app/store'
import { categoryListSelector } from '../model'
import { Colors } from '../../../shared'

interface CategoryListProps {
  setCategoryId: (id: string) => void
}

export const CategoryList: FC<CategoryListProps> = ({ setCategoryId }): JSX.Element => {
  const [selectedId, setSelectedId] = useState()

  const { width } = useWindowDimensions()
  const cardWidth = width / 2 - 32

  const categories = useAppSelector(categoryListSelector)

  const setPressed = (id: string): void => {
    categories.forEach((category) => {
      category.isPressed = category.id === id
    })
  }

  const pressHandler = (categoryId: string): void => {
    setCategoryId(categoryId)
    setPressed(categoryId)
  }

  return (
    <Container>
      {categories &&
        categories.map(({ id, icon, title, isPressed }) => (
          <Pressable onPress={() => pressHandler(id)} key={id}>
            <Card
              key={id}
              style={{
                width: cardWidth,
                backgroundColor: isPressed ? '#efe6ff' : 'transparent',
                borderColor: isPressed ? Colors.primary : Colors.border,
              }}
            >
              <Image source={{ uri: icon }} style={{ width: 28, height: 28 }} />
              <Title>{title}</Title>
            </Card>
          </Pressable>
        ))}
    </Container>
  )
}

const Container = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Card = styled(View)`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
  margin: 8px;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
`

const Title = styled(Text)`
  font-size: 16px;
  color: ${Colors.text};
`
