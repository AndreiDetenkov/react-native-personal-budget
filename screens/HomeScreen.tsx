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
            {response.map(({ id, name, value, categories: { icon, title } }: TransactionsList) => (
              <Card key={id}>
                <CardIcon>
                  <Image source={{ uri: icon }} style={{ width: 28, height: 28 }} />
                </CardIcon>
                <CardText>
                  <Title>{name}</Title>
                  <Category>{title}</Category>
                </CardText>
                <CardValue>
                  <Value>{value}</Value>
                </CardValue>
              </Card>
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </FullLayout>
  )
}

const Card = styled(View)`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: lightgrey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
`

const CardIcon = styled(View)`
  display: flex;
  flex: 0.2;
  justify-content: center;
  align-items: flex-start;
`

const CardText = styled(View)`
  display: flex;
  flex: 1;
`

const CardValue = styled(View)`
  display: flex;
  align-items: flex-end;
  flex: 0.3;
`

const Title = styled(Text)`
  font-size: 16px;
`
const Category = styled(Text)`
  font-size: 12px;
  color: grey;
`
const Value = styled(Text)`
  font-size: 16px;
`
