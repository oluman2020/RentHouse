import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

export default function HeaderIcon({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.Touchable}>
        <Icon
          name='align-left'
          type='font-awesome'
          size={24}
          color='#000'

        />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 250,
    paddingTop: 20
  },

  Touchable: {
    padding: 5,

  },

})