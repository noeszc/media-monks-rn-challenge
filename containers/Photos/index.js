import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import _ from 'lodash'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { getPhotos } from './selectors'
import ThumbList from '../../components/ThumbList/ThumbList'

class Photos extends Component {
  static navigationOptions = ({ navigation }) => ({
    ...(navigation.getParam('title') && {
      title: navigation.getParam('title'),
    }),
    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = `image${focused ? '' : '-outline'}`
      return <Icon name={iconName} size={25} color={tintColor} />
    },
  })

  handleOpenPhoto = ({ id }) => {
    _.invoke(this.props, ['navigation', 'navigate'], 'SinglePhoto', {
      id,
    })
  }

  render() {
    const { photos, navigation } = this.props
    const gutter = !_.isNil(_.get(navigation, ['state', 'params', 'id'], null))
    return (
      <ThumbList
        photos={photos}
        onOpenPhoto={this.handleOpenPhoto}
        gutter={gutter}
      />
    )
  }
}

const mapStateToProps = (state, props) => ({
  photos: getPhotos(state, props),
})

const withConnect = connect(
  mapStateToProps,
  null,
)

export default compose(withConnect)(Photos)
