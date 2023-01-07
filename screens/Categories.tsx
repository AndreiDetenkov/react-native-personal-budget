import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native'

import { Container, MainTitle } from '../shared/styled'
import { CategoryCard, categoryModel } from '../entities/category'
import { ICategoriesWithValue } from '../entities/category/model'
import { SafeAreaView } from 'react-native-safe-area-context'

export function CategoriesScreen() {
  const { categoriesWithValue } = categoryModel
  const categories = useSelector(categoriesWithValue)

  const sortedList = useMemo(() => {
    return categories.sort((a: ICategoriesWithValue, b: ICategoriesWithValue): number => {
      return b.value - a.value
    })
  }, [categories])

  return (
    <Container>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MainTitle>All Categories</MainTitle>
          {sortedList.map((category: ICategoriesWithValue) => (
            <CategoryCard item={category} key={category.id} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}
