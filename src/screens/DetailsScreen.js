import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const DetailsScreen = () => {
  return (
    <View>
      <Text style={ styles.text }>this is the Details Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default DetailsScreen