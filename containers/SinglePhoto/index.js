import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { getPhotoById } from '../Photos/selectors'

function SinglePhoto({ photo }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: photo.url }}
        style={styles.image}
        resizeMode='contain'
      />
    </View>
  )
}

SinglePhoto.navigationOptions = {
  headerTransparent: true,
  headerTintColor: '#ffffff',
  headerStyle: { borderBottomWidth: 0 },
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
})

const mapStateToProps = (state, props) => ({
  photo: getPhotoById(state, props),
})

const withConnect = connect(
  mapStateToProps,
  null,
)

export default compose(withConnect)(SinglePhoto)
