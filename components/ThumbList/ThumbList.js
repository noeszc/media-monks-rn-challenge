import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SectionGrid } from 'react-native-super-grid'

import Image from '../Image'

function ThumbList({ photos: sections, onOpenPhoto: onPress }) {
  return (
    <SectionGrid
      itemDimension={100}
      sections={sections}
      style={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={onPress}>
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
    marginTop: 32,
    flex: 1,
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
