import React, { useState } from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator, Alert, Button, Text, TextInput, View } from 'react-native'

import { RootTabScreenProps } from '../app/navigation/types'
import { useAppSelector } from '../app/store'
import { CategoryList, categoryModel } from '../entities/category'
import { createTransaction, CreateTransactionPayload } from '../entities/transaction'
import { Container } from '../shared/styled'
import { Colors } from '../shared/constants/Colors'

export function ModalScreen({ navigation }: RootTabScreenProps<'Modal'>) {
  const [text, setText] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const categoryId = useAppSelector(categoryModel.categoryIdSelector)

  const submitHandler = async (): Promise<void> => {
    if (!text || !value || !categoryId) {
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
        <Wrapper>
          <Text>Transaction</Text>
          <Input
            autoFocus={true}
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
          <CategoryList />
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
  border: 1px solid ${Colors.text};
  border-radius: 4px;
  padding: 8px 16px;
`
