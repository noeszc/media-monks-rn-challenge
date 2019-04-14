import React, { Component } from 'react'
import { Text, View, SectionList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { getPhotosGroupByDate, getPhotosByAlbumId } from './selectors'
import Image from '../../components/Image'

class Photos extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = `image${focused ? '' : '-outline'}`
      return <Icon name={iconName} size={25} color={tintColor} />
    },
  }

  render() {
    const { photos } = this.props
    return (
      <View>
        <Text> Photos Container</Text>
        <SectionList
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.url }}
              style={{ width: 200, height: 200 }}
              PlaceholderContent={<ActivityIndicator />}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          )}
          sections={photos}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  photos: getPhotosGroupByDate(state),
})

const withConnect = connect(
  mapStateToProps,
  null,
)

export default compose(withConnect)(Photos)
