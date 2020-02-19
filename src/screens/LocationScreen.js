import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const LocationScreen = () => {
  return (
    <View>
      <Text style={ styles.text }>this is the location Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default LocationScreen