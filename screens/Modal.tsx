import React, { useState } from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator, Alert, Button, ScrollView, Text, TextInput, View } from 'react-native'

import { RootTabScreenProps } from '../app/navigation/types'
import { CategoryList } from '../entities/category'
import { createTransaction, CreateTransactionPayload } from '../entities/transaction'
import { Colors, Container } from '../shared'

export function ModalScreen({ navigation }: RootTabScreenProps<'Modal'>) {
  const [text, setText] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [categoryId, setCategoryId] = useState<string>('')

  const submitHandler = async (): Promise<void> => {
    if (!text || !value) {
      return Alert.alert('Please, type name and value of transaction and choose category')
    }

    const payload: CreateTransactionPayload = {
      name: text,
      value: Number(value),
      category_id: categoryId,
    }

    try {
      setLoading(true)
      await createTransaction(payload)
      navigation.goBack()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Wrapper>
            <Text>Transaction</Text>
            <Input
              autoFocus={true}
              autoCapitalize="sentences"
              placeholder="Type description"
              value={text}
              onChangeText={setText}
              cursorColor={Colors.primary}
            />
          </Wrapper>
          <Wrapper>
            <Text>Value</Text>
            <Input
              placeholder="Type value"
              keyboardType="numeric"
              value={value}
              onChangeText={setValue}
              cursorColor={Colors.primary}
            />
          </Wrapper>

          <ScrollWrapper>
            <CategoryList setCategoryId={setCategoryId} />
          </ScrollWrapper>

          <View style={{ marginBottom: 20 }}>
            {loading ? (
              <ActivityIndicator size="large" color="#6200ee" />
            ) : (
              <Button title="Submit" color="#6200ee" onPress={submitHandler} disabled={loading} />
            )}
          </View>
        </ScrollView>
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
  border: 1px solid ${Colors.text};
  height: 48px;
  border-radius: 4px;
  padding: 8px 16px;
`
