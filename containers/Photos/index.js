import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import _ from 'lodash'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { getPhotos } from './selectors'
import ThumbList from '../../components/ThumbList/ThumbList'

class Photos extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = `image${focused ? '' : '-outline'}`
      return <Icon name={iconName} size={25} color={tintColor} />
    },
  }

  handleOpenPhoto = () => {
    console.log('handleOpenPhoto()')
  }

  render() {
    const { photos } = this.props
    return <ThumbList photos={photos} onOpenPhoto={this.handleOpenPhoto} />
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
