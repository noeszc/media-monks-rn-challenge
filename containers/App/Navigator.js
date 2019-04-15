import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import Photos from '../Photos'
import Albums from '../Albums'

const TabNavigator = createBottomTabNavigator({
  Photos: Photos,
  Albums: Albums,
})

const Stack = createStackNavigator({
  Main: { screen: TabNavigator, navigationOptions: { header: null } },
  PhotoAlbum: { screen: Photos },
})

export default createAppContainer(Stack)
