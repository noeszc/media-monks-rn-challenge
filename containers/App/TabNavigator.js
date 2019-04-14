import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import Photos from '../Photos'
import Albums from '../Albums'

const TabNavigator = createBottomTabNavigator({
  Photos: Photos,
  Albums: Albums,
})

export default createAppContainer(TabNavigator)
