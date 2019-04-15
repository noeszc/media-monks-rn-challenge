import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import Photos from '../Photos'
import Albums from '../Albums'
import SinglePhoto from '../SinglePhoto'

const navigationOptions = { header: null }

const TabNavigator = createBottomTabNavigator({
  Photos: Photos,
  Albums: Albums,
})

const Stack = createStackNavigator({
  Main: { screen: TabNavigator, navigationOptions },
  PhotoAlbum: { screen: Photos },
  SinglePhoto: { screen: SinglePhoto },
})

export default createAppContainer(Stack)
