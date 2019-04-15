import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { Constants } from 'expo'
import Image from '../Image'

function AlbumList({ albums: items, onOpenAlbum: onPress }) {
  return (
    <FlatGrid
      itemDimension={132}
      items={items}
      style={styles.container}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <TouchableOpacity onPress={() => onPress(item)}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

AlbumList.defaultProps = {
  onOpenAlbum: () => {},
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  item: {
    justifyContent: 'flex-end',
    height: 132,
  },
  image: { width: '100%', height: 100 },
  name: {
    fontWeight: 'bold',
    padding: 8,
  },
})

export default AlbumList
