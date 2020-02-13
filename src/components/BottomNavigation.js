import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'

const ButtomNavigation = () => {
  return (
    <View style={{ backgroundColor: '#ffffff'}}>
      <View style={ styles.buttonNavigation }>
        <TouchableWithoutFeedback onPress={() => console.log('Button Clicked')}>
          <View style={ styles.blueContainer}>
            <Image
              source={ require('../../assets/button-plus.png') }
              style={ styles.buttonIcon }
            ></Image>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{ position: 'relative'}}>
        <Image
          source={ require('../../assets/bottom-nav.png')}
          style={ styles.bottomView }
        ></Image>
        <View>
          <View style={{ flexDirection: 'row', marginLeft: 10, position: 'absolute'}}>
            <View>
              <Image
                source={ require('../../assets/user.png')}
                style={ styles.navIcons }
              ></Image>
              <Text style={ styles.iconText }>Account</Text>
            </View>
            <View style={{ marginLeft: 33 }}>
              <Image
                source={ require('../../assets/wallet.png')}
                style={ styles.navIcons }
              ></Image>
              <Text style={ styles.iconText }>Wallet</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: -5, alignSelf: 'flex-end' }}>
          <View style={{ marginTop: 5 }}>
            <Image
              source={ require('../../assets/future.png')}
              style={ styles.navIcons }
            ></Image>
            <Text style={ styles.iconText }>Errands</Text>
          </View>
          <View style={{ marginTop: 5, marginLeft: 25, marginRight: 10 }}>
            <Image
              source={ require('../../assets/bell.png')}
              style={ styles.navIcons }
            ></Image>
            <Text style={ styles.iconText }>Notifications</Text>
          </View>
        </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonNavigation: {
    position: 'absolute',
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    bottom: 25,
    zIndex: 10
  },
  blueContainer: {
    backgroundColor: '#0086B9',
    width: 70,
    height: 70,
    borderRadius: 100,
    position: 'relative'
  },
  buttonIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 22,
    top: 22
  },
  bottomView: {
    position: 'absolute',
    width: '100%',
    bottom: -16
  },
  navIcons: {
    width: 25,
    height: 25,
    alignSelf: 'center'
  },
  iconText: {
    color: '#909090',
    fontSize: 10,
    paddingBottom: 10
  }
})

export default ButtomNavigation