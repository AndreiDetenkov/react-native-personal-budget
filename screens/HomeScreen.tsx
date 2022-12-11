import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
  Alert,
  Image,
} from 'react-native'

import { RootTabScreenProps } from '../types'
import { TransactionsList } from '../config/supabase/supabase.types'
import { getTransactions } from '../models/transactions'
import { FullLayout } from '../ui/styles'
import { Colors } from '../constants/Colors'
import { AppCard } from '../components/AppCard/AppCard'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<any>([])

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

  useEffect(() => {
    fetchData()
  }, [])
  const refreshHandler = () => {
    fetchData()
  }

  return (
    <FullLayout>
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
          >
            {response.map((transaction: TransactionsList) => (
              <AppCard transaction={transaction} key={transaction.id} />
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </FullLayout>
  )
}
