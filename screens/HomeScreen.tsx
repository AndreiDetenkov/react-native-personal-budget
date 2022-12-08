import {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import styled from "styled-components";
import {Alert, ScrollView, Text, View} from 'react-native';

import {RootTabScreenProps} from '../types';
import {getTransactions} from "../models/transactions";
import {TransactionsResponseSuccess} from "../config/supabase/supabase.types";

const Container = styled(View)`
  display: flex;
  flex-grow: 1;
  padding: 0 16px;
  background: #fff;
`
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [list, setList] = useState<TransactionsResponseSuccess>([])

  const fetchData = async () => {
    const { data, error } = await getTransactions();
    if (error) {
      return Alert.alert(JSON.stringify(error?.message));
    }
    setList(data)
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          {list && list.map(item => <Text key={item.id}>{item.name + ' - ' + item.value}</Text>)}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}
