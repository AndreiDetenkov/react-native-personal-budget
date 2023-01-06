import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Container } from '../shared/styled'
import { transactionsByCategory } from '../entities/transaction/model'
import { CategoryCard, ICategoryCard } from '../entities/category'

export function CategoriesScreen() {
  const list = useSelector(transactionsByCategory)

  const sortedList = useMemo(() => {
    return list.sort((a: { value: number }, b: { value: number }) => {
      return b.value > a.value
    })
  }, [list])

  return (
    <Container>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {sortedList.map(({ value, categories }: ICategoryCard) => (
            <CategoryCard categories={categories} value={value} key={categories?.title} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}
