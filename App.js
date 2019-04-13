import React from 'react'
import { Provider } from 'react-redux'
import { TabNavigator } from './Navigators'
import configureStore from './configureStore'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  )
}
