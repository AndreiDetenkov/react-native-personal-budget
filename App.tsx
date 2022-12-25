import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import useCachedResources from './app/hooks/useCachedResources'
import useColorScheme from './app/hooks/useColorScheme'
import Navigation from './app/navigation'
import { store } from './app/store/store'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar style="auto" />
        </Provider>
      </SafeAreaProvider>
    )
  }
}
