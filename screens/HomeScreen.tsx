import { useState } from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, View, ActivityIndicator, RefreshControl } from 'react-native'

import { RootTabScreenProps } from '../types'
import { Transaction } from '../config/supabase/supabase.types'
import { getTransactions } from '../models/transactions'
import { useFetch } from '../hooks/useFetch'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [refreshing, setRefreshing] = useState(false)

  const { loading, response } = useFetch(getTransactions)
  const refreshHandler = () => {}

  return (
    <Container>
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
          >
            {response.map(({ id, name, value }: Transaction) => (
              <Text key={id}>
                {name} - {value}
              </Text>
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </Container>
  )
}

const Container = styled(View)`
  display: flex;
  flex-grow: 1;
  padding: 0 16px;
  background: #fff;
`
