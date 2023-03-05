import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Container, MainTitle } from '../../shared'
import { CategoryCard, categoryModel } from '../../entities/category'
import { useAppDispatch } from '../../app/store'

export function CategoriesScreen() {
  const categories = useSelector(categoryModel.categoriesWithValue)
  const dispatch = useAppDispatch()

  const sortedList = useMemo(() => {
    return categories.sort(
      (a: categoryModel.ICategoriesWithValue, b: categoryModel.ICategoriesWithValue): number => {
        return b.value - a.value
      }
    )
  }, [categories])

  useEffect(() => {
    dispatch(categoryModel.getCategoriesRequest())
  }, [])

  return (
    <Container>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MainTitle>All Categories</MainTitle>
          {sortedList.map((category: categoryModel.ICategoriesWithValue) => (
            <CategoryCard item={category} key={category.id} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}
