import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

export default class Photos extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = `image${focused ? '' : '-outline'}`
      return <Icon name={iconName} size={25} color={tintColor} />
    },
  }
  render() {
    return (
      <View>
        <Text> Photos Container</Text>
      </View>
    )
  }
}
