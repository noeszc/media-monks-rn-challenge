import React, { Component } from 'react'
import {
  Animated,
  Image as RNImage,
  Platform,
  StyleSheet,
  View,
} from 'react-native'

class Image extends Component {
  placeholderContainerOpacity = new Animated.Value(1)

  onLoadEnd = () => {
    const minimumWait = 100
    const staggerNonce = 200 * Math.random()

    setTimeout(
      () =>
        Animated.timing(this.placeholderContainerOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }).start(),
      minimumWait + staggerNonce,
    )
  }
  render() {
    const {
      placeholderStyle,
      PlaceholderContent,
      containerStyle,
      style,
      ImageComponent,
      ...attributes
    } = this.props

    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        {Platform.select({
          android: (
            <React.Fragment>
              <View style={styles.placeholderContainer}>
                <Animated.View
                  style={StyleSheet.flatten([
                    style,
                    styles.placeholder,
                    {
                      backgroundColor: this.placeholderContainerOpacity.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: [
                            styles.placeholder.backgroundColor,
                            'transparent',
                          ],
                        },
                      ),
                    },
                    placeholderStyle,
                  ])}
                >
                  {PlaceholderContent}
                </Animated.View>
              </View>

              <ImageComponent {...attributes} style={style} />
            </React.Fragment>
          ),
          default: (
            <React.Fragment>
              <ImageComponent
                {...attributes}
                onLoadEnd={this.onLoadEnd}
                style={style}
              />

              <Animated.View
                style={StyleSheet.flatten([
                  styles.placeholderContainer,
                  { opacity: this.placeholderContainerOpacity },
                ])}
              >
                <View
                  style={StyleSheet.flatten([
                    style,
                    styles.placeholder,
                    placeholderStyle,
                  ])}
                >
                  {PlaceholderContent}
                </View>
              </Animated.View>
            </React.Fragment>
          ),
        })}
      </View>
    )
  }
}

const styles = {
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
  placeholderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  placeholder: {
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

Image.defaultProps = {
  ImageComponent: RNImage,
}

export default Image
