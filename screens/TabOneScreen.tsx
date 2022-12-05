import {SafeAreaView} from "react-native-safe-area-context";
import styled from "styled-components";
import {RootTabScreenProps} from '../types';
import {Text, View} from 'react-native';

const Container = styled(View)`
  display: flex;
  flex-grow: 1;
  padding: 0 16px;
  background: #fff;
`
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <Container>
      <SafeAreaView>
        <Text>Tab One</Text>
      </SafeAreaView>
    </Container>
  );
}
