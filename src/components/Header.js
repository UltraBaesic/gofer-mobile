import React from 'react'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const Header = ({ navigation }) => {
  return (
    <View style={ styles.header }>
        <View style={ styles.imageHeader}>
          <TouchableWithoutFeedback>
            <Image
              source={ require('./../../assets/menu.png') }
              style={{ width: 21, height: 21, marginTop: 2 }}
            ></Image>
          </TouchableWithoutFeedback>
          <Text style={ styles.logoText }>Gofer</Text>
        </View>
        <Image
          source={ require('./../../assets/search.png') }
          style={{ width: 20, height: 20, marginTop: 2 }}
        ></Image>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1
  },
  imageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120
  },
  logoText: {
    fontSize: 25,
    color: '#0086B9',
    marginTop: -4,
    fontFamily: 'muli-regular'
  }
})

export default Header