import React from 'react'
import { Text } from '../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container } from '../ui/styles'

export default function ModalScreen() {
  return (
    <Container>
      <SafeAreaView>
        <Text>Modal</Text>
      </SafeAreaView>
    </Container>
  );
}


