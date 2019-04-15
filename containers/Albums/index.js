import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import _ from 'lodash'
import { MaterialIcons as Icon } from '@expo/vector-icons'
import { getPhotosGroupByDate, getAlbumsModel } from './selectors'

import AlbumList from '../../components/AlbumList/AlbumList'

class Albums extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='collections-bookmark' size={25} color={tintColor} />
    },
  }

  handleOpenAlbum = ({ id, name: title }) => {
    console.log({ id })
    _.invoke(this.props, ['navigation', 'navigate'], 'PhotoAlbum', {
      id,
      title,
    })
  }
  render() {
    const { albums } = this.props
    return <AlbumList albums={albums} onOpenAlbum={this.handleOpenAlbum} />
  }
}

const mapStateToProps = (state) => ({
  albums: getAlbumsModel(state),
})

const withConnect = connect(
  mapStateToProps,
  null,
)

export default compose(withConnect)(Albums)
