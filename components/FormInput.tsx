import { Text } from './Themed'
import { TextInput, View } from 'react-native'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Colors } from '../constants/Colors'

type KeyboardType = 'default' | 'numeric'
interface Props {
  label: string
  placeholder: string
  keyboardType: KeyboardType
  value: string | undefined
  onChangeHandler: () => {}
}
export const FormInput: FC<Props> = ({
  label,
  placeholder,
  keyboardType,
  value,
  onChangeHandler,
}) => {
  return (
    <Wrapper>
      <Text>{label}</Text>
      <Input
        autoCapitalize="sentences"
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChange={onChangeHandler}
        cursorColor={Colors.primary}
      />
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  margin-bottom: 16px;
`

const Input = styled(TextInput)`
  border: 1px solid #333;
  border-radius: 4px;
  padding: 8px 16px;
`
