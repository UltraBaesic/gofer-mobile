import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps'

export default class LocationScreen extends React.Component {
  render() {
    return(
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={ require('../../assets/maps.png')}
          style={ styles.image }
        ></Image>
        <View style={ styles.mainContainer }>
          <Text style={ styles.headerText }>What is your Pick-up &amp; Delivery Address?</Text>
          <View>
            <TextInput
              style={ styles.inputField }
              placeholderTextColor='#BEBEBE'
              placeholder='Pick-up Address'
            />
             <TextInput
              style={ styles.inputField2 }
              placeholderTextColor='#BEBEBE'
              placeholder='Delivery Address'
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 365,
    height: 180,
    resizeMode: 'cover'
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'muli-semi',
    color: '#747474',
    paddingBottom: 30
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#D9EBED',
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    fontFamily: 'muli-regular'
  },
  inputField2: {
    borderWidth: 1,
    borderColor: '#D9EBED',
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    fontFamily: 'muli-regular',
    marginTop: 30,
    marginBottom: 40
  }

})