import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, View, Text, Alert, Pressable, ScrollView, Button } from 'react-native'

import { Colors } from '../constants/Colors'
import { Container } from '../ui/styles'
import { getCategories, getTransactions, setTransaction } from '../models/transactions'
import { CategoriesList } from '../config/supabase/supabase.types'
import { RootStackParamList, RootTabScreenProps } from '../types'

export default function ModalScreen({ navigation }: RootTabScreenProps<'Modal'>) {
  const [text, setText] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [categories, setCategories] = useState<CategoriesList[]>([])
  const [categoryId, setCategoryId] = useState<string>('')

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async (): Promise<void> => {
    try {
      const { data, error } = await getCategories()
      if (error) {
        Alert.alert(JSON.stringify(error, null, 2))
        return
      }
      if (data?.length) {
        const result = formatCategories(data)
        setCategories(result)
      }
    } catch (e) {}
  }

  const formatCategories = (categories: CategoriesList[]) => {
    return categories?.map((item) => {
      return { ...item, isPressed: false }
    })
  }

  const pressHandler = (categoryId: string): void => {
    categories.forEach((item) => {
      item.isPressed = item.id === categoryId
    })
    setCategoryId(categoryId)
  }

  const submitHandler = async () => {
    const payload = {
      name: text,
      value: parseFloat(value),
      category_id: categoryId,
    }
    const { error } = await setTransaction(payload)
    if (error) {
      Alert.alert(JSON.stringify(error?.message))
      return
    }
    navigation.goBack()
  }

  return (
    <Container>
      <SafeAreaView>
        <Wrapper>
          <Text>Transaction</Text>
          <Input
            autoCapitalize="sentences"
            placeholder="Type description"
            value={text}
            onChangeText={setText}
            cursorColor={Colors.secondary}
          />
        </Wrapper>

        <Wrapper>
          <Text>Value</Text>
          <Input
            placeholder="Type value"
            keyboardType="numeric"
            value={value}
            onChangeText={setValue}
            cursorColor={Colors.secondary}
          />
        </Wrapper>

        <ScrollWrapper>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories &&
              categories.map(({ id, title, isPressed }) => (
                <Pressable onPress={() => pressHandler(id)} key={id}>
                  <Chip style={{ backgroundColor: isPressed ? '#bb86fc' : '#eee' }}>
                    <ChipLabel style={{ color: isPressed ? '#eee' : '#000021' }}>{title}</ChipLabel>
                  </Chip>
                </Pressable>
              ))}
          </ScrollView>
        </ScrollWrapper>

        <Button title="Submit" color="#6200ee" onPress={submitHandler} />
      </SafeAreaView>
    </Container>
  )
}

const Wrapper = styled(View)`
  margin-bottom: 16px;
`

const ScrollWrapper = styled(View)`
  margin: 16px auto 32px;
`

const Input = styled(TextInput)`
  border: 1px solid #333;
  border-radius: 4px;
  padding: 8px 16px;
`

const Chip = styled(View)`
  height: 32px;
  padding: 0 16px;
  text-align: center;
  margin-right: 16px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ChipLabel = styled(Text)`
  font-size: 13px;
`
