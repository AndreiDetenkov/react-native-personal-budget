import { Text } from './Themed'
import { TextInput, View } from 'react-native'
import React, { FC } from 'react'
import styled from 'styled-components'

type KeyboardType = 'default' | 'numeric'
interface Props {
  label: string
  placeholder: string
  keyboardType: KeyboardType
}
export const FormInput: FC<Props> = ({ label, placeholder, keyboardType }) => {
  return (
    <View>
      <Text>{label}</Text>
      <Input autoCapitalize="sentences" placeholder={placeholder} keyboardType={keyboardType} />
    </View>
  )
}

const Input = styled(TextInput)`
  border: 1px solid red;
`
