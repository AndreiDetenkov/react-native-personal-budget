import React, { useState } from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  TextInput,
  View,
  Text,
  Alert,
  Pressable,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native'

import { Colors } from '../constants/Colors'
import { Container } from '../ui/styles'
import { createTransaction } from '../models/transactions'
import { RootTabScreenProps } from '../types'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getTransactionsRequest } from '../features/transaction/transactionSlice.actions'
import {
  categoriesSelector,
  categoryIdSelector,
} from '../features/category/categorySlice.selectors'
import { setCategory } from '../features/category/categorySlice'

export default function ModalScreen({ navigation }: RootTabScreenProps<'Modal'>) {
  const [text, setText] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const categories = useAppSelector(categoriesSelector)
  const categoryId = useAppSelector(categoryIdSelector)

  const pressHandler = (categoryId: string): void => {
    dispatch(setCategory(categoryId))
  }

  const submitHandler = async () => {
    const payload = {
      name: text,
      value: parseFloat(value),
      category_id: categoryId,
    }

    try {
      setLoading(true)
      const { error } = await createTransaction(payload)
      if (error) {
        Alert.alert(JSON.stringify(error?.message))
        return
      }
      dispatch(getTransactionsRequest())
      navigation.goBack()
    } finally {
      setLoading(false)
    }
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
                    <ChipLabel style={{ color: isPressed ? '#fff' : '#000021' }}>{title}</ChipLabel>
                  </Chip>
                </Pressable>
              ))}
          </ScrollView>
        </ScrollWrapper>

        {loading ? (
          <ActivityIndicator size="large" color="#6200ee" />
        ) : (
          <Button title="Submit" color="#6200ee" onPress={submitHandler} disabled={loading} />
        )}
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
