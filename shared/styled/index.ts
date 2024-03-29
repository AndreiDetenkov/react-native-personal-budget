import styled from 'styled-components'
import { Text, View } from 'react-native'

export const FullLayout = styled(View)`
  display: flex;
  flex-grow: 1;
  background: #fff;
`

export const Container = styled(FullLayout)`
  padding: 0 16px;
`

export const CardIcon = styled(View)`
  display: flex;
  flex: 0.2;
  justify-content: center;
  align-items: flex-start;
`

export const CardText = styled(View)`
  display: flex;
  justify-content: center;
  flex: 1;
`

export const CardValue = styled(View)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 0.3;
`

export const MainTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  padding: 0;
`
