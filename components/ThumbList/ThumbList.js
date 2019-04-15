import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SectionGrid } from 'react-native-super-grid'
import { Constants } from 'expo'
import Image from '../Image'

function ThumbList({ photos: sections, onOpenPhoto: onPress, gutter }) {
  return (
    <SectionGrid
      itemDimension={100}
      sections={sections}
      style={[styles.container, gutter && styles.noGutter]}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <Image style={[styles.item]} source={{ uri: item.url }} />
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  )
}

ThumbList.defaultProps = {
  onOpenPhoto: () => {},
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  noGutter: {
    marginTop: 0,
  },
  item: {
    justifyContent: 'flex-end',
    padding: 10,
    height: 100,
  },
  header: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
  },
})

export default ThumbList
