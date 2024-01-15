import React from 'react'
import { type TextStyle, View, type ViewStyle } from 'react-native'
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

import { colors, sizes } from './../shared/theme'
import { Text } from './components/Text'

const App = (): React.JSX.Element | null => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Screen />
    </SafeAreaProvider>
  )
}

const Screen = () => {
  const { bottom: paddingBottom, top: paddingTop } = useSafeAreaInsets()
  return (
    <View style={[$screen, { paddingBottom, paddingTop }]}>
      <View style={$welcomeContainer}>
        <Text style={$welcomeSmall}>Welcome To:</Text>
        <Text style={$welcomeLarge}>React Native Essentials Starter Pack!</Text>
      </View>
    </View>
  )
}

export default App

const $screen: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background.primary,
  paddingHorizontal: sizes.spacing.md,
  justifyContent: 'space-between',
}

const $welcomeContainer: ViewStyle = {
  rowGap: sizes.spacing.lg,
  flexGrow: 1,
  justifyContent: 'center',
}

const $welcomeSmall: TextStyle = {
  fontSize: 18,
  color: 'black',
}

const $welcomeLarge: TextStyle = {
  fontSize: 48,
  color: 'black',
}
