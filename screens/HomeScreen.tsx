import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, ActivityIndicator, RefreshControl, Alert } from 'react-native'

import { RootTabScreenProps } from '../types'
import { TransactionsList } from '../config/supabase/supabase.types'
import { getTransactions } from '../models/transactions'
import { FullLayout } from '../ui/styles'
import { Colors } from '../constants/Colors'
import { CardItem } from '../components/CardItem'
import { CardTotal } from '../components/CardTotal'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<any>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const { data, error } = await getTransactions()
      if (error) {
        Alert.alert(error.code, error.message)
        return
      }
      setResponse(data)
    } finally {
      setLoading(false)
    }
  }

  const refreshHandler = () => {
    fetchData()
  }

  return (
    <FullLayout>
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <>
            <CardTotal total="154357" />
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
            >
              {response.map((transaction: TransactionsList) => (
                <CardItem transaction={transaction} key={transaction.id} />
              ))}
            </ScrollView>
          </>
        )}
      </SafeAreaView>
    </FullLayout>
  )
}
