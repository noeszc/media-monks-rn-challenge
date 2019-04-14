import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons as Icon } from '@expo/vector-icons'

export default class Albums extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='collections-bookmark' size={25} color={tintColor} />
    },
  }
  render() {
    return (
      <View>
        <Text> Albums Container</Text>
      </View>
    )
  }
}
