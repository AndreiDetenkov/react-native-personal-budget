import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text } from '../shared/components/Themed'
import { Container } from '../shared/styled'

export function CategoriesScreen() {
  return (
    <Container>
      <SafeAreaView>
        <Text>{'categories'}</Text>
      </SafeAreaView>
    </Container>
  )
}
