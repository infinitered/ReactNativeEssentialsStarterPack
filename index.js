/**
 * @format
 */

import React, { useEffect } from 'react'
import { AppRegistry } from 'react-native'
import BootSplash from 'react-native-bootsplash'

import { name as appName } from './app.json'
import AppAssignment from './app/App'
import { setupMockServer } from './msw'

setupMockServer()

if (__DEV__) {
  import('./shared/utils/reactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  )
}

function App() {
  useEffect(() => {
    setTimeout(() => {
      BootSplash.hide({ fade: true })
    }, 500)
  }, [])

  return <AppAssignment />
}

AppRegistry.registerComponent(appName, () => App)
