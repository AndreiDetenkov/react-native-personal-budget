import React from 'react'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Container } from '../shared/styled'
import { transactionsByCategory } from '../entities/transaction/transactionSlice.selectors'
import { CategoryCard, ICategoryCard } from '../entities/category'

export function CategoriesScreen() {
  const list = useSelector(transactionsByCategory)
  list.sort((a: { value: number }, b: { value: number }) => {
    return b.value > a.value
  })

  return (
    <Container>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {list.map(({ value, categories }: ICategoryCard) => (
            <CategoryCard categories={categories} value={value} key={categories?.title} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}
