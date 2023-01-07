import * as React from 'react'
import { ColorSchemeName, Pressable } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CategoriesScreen, ModalScreen, NotFoundScreen, TransactionsScreen } from '../../screens'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from './types'
import LinkingConfiguration from './LinkingConfiguration'
import { Colors } from '../../shared/constants/Colors'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} options={{ title: 'Add transaction' }} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Transactions"
      screenOptions={{
        tabBarActiveTintColor: Colors.text,
        tabBarStyle: { paddingBottom: 3 },
      }}
    >
      <BottomTab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={({ navigation }: RootTabScreenProps<'Transactions'>) => ({
          title: 'Transactions',
          tabBarIcon: ({ color }) => <TabBarIcon name="md-list" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome name="plus-square-o" size={30} style={{ marginRight: 16 }} />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Categories',
          tabBarIcon: ({ color }) => <TabBarIcon name="pie-chart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={28} style={{ marginBottom: -8 }} {...props} />
}
