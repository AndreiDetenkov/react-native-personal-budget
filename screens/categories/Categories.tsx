import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native'

import { Container, MainTitle } from '../../shared/styled'
import { CategoryCard, categoryModel } from '../../entities/category'
import { ICategoriesWithValue } from '../../entities/category/model'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAppDispatch } from '../../app/store'

export function CategoriesScreen() {
  const { categoriesWithValue, getCategoriesRequest } = categoryModel
  const categories = useSelector(categoriesWithValue)
  const dispatch = useAppDispatch()

  const sortedList = useMemo(() => {
    return categories.sort((a: ICategoriesWithValue, b: ICategoriesWithValue): number => {
      return b.value - a.value
    })
  }, [categories])

  useEffect(() => {
    dispatch(getCategoriesRequest())
  }, [])

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
