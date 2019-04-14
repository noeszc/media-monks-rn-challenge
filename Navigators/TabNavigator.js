import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import Photos from '../Containers/Photos'
import Albums from '../Containers/Albums'

const TabNavigator = createBottomTabNavigator({
  Photos: Photos,
  Albums: Albums,
})

export default createAppContainer(TabNavigator)
