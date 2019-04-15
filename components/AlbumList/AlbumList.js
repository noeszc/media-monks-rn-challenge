import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import Image from '../Image'

function AlbumList({ albums: items, onOpenAlbum: onPress }) {
  console.log(items)
  return (
    <FlatGrid
      itemDimension={130}
      items={items}
      styles={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          {/* <Image style={styles.item} source={{ uri: item.url }} /> */}
          <View style={styles.item}>
            <Text>{item.id}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

AlbumList.defaultProps = {
  onOpenAlbum: () => {},
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
  },
  item: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
})

export default AlbumList
