import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, View, ActivityIndicator, RefreshControl, Alert } from 'react-native'

import { RootTabScreenProps } from '../types'
import { Transaction } from '../config/supabase/supabase.types'
import { getTransactions } from '../models/transactions'
import { useFetch } from '../hooks/useFetch'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<any>([])

  const fetchData = async () => {
    setLoading(true)
    try {
      const { data, error } = await getTransactions()
      if (error) {
        Alert.alert(JSON.stringify(error, null, 2))
        return
      }
      setResponse(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  const refreshHandler = () => {
    fetchData()
  }

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
