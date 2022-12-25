import React, { useState } from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, View, Text, Alert, Button, ActivityIndicator } from 'react-native'

import { Colors } from '../../shared/constants/Colors'
import { Container } from '../../shared/styled'
import { createTransaction } from '../../models/transactions'
import { RootTabScreenProps } from '../../app/navigation/types'
import { useAppDispatch, useAppSelector } from '../../app/store/store.hooks'
import { getTransactionsRequest } from '../../entities/transaction/transactionSlice.actions'
import { categoryModel, CategoriesList } from '../../entities/category'

export function ModalScreen({ navigation }: RootTabScreenProps<'Modal'>) {
  const [text, setText] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const { categoriesSelector } = categoryModel
  const { categoryId } = useAppSelector(categoriesSelector)

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
          <CategoriesList />
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
