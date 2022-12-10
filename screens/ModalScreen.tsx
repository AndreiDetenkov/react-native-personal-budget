import React from 'react'
import { Text } from '../components/Themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container } from '../ui/styles'
import { TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { FormInput } from '../components/FormInput'

export default function ModalScreen() {
  return (
    <Container>
      <SafeAreaView>
        <FormInput label="Description" placeholder="Type description" keyboardType="default" />
        <FormInput label="Value" placeholder="Type value" keyboardType="numeric" />
      </SafeAreaView>
    </Container>
  )
}
