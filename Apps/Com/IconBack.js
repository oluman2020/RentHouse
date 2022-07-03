import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

export default function IconBack({ type, onPress }){
  if (type =='transparent-with-back')
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.Touchable}>
          <Icon
            name='chevron-left'
            type='font-awesome'
            size={24}
            color='grey'

          />
        </TouchableOpacity>

      </View>
    )
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.Touchable}>
        <Icon
          name='chevron-left'
          type='font-awesome'
          size={20}
          color='grey'

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
    padding: 10,

  },

})