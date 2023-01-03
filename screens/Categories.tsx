import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Container } from '../shared/styled'
import { transactionsByCategory } from '../entities/transaction/transactionSlice.selectors'
import { CategoryCard } from '../entities/category'
import { ScrollView } from 'react-native'

export function CategoriesScreen() {
  const list = useSelector(transactionsByCategory)
  list.sort((a: { value: number }, b: { value: number }) => {
    return b.value > a.value
  })

  useEffect(() => {}, [])

  return (
    <Container>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {list.map(({ value, categories }: any) => (
            <CategoryCard categories={categories} value={value} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}
