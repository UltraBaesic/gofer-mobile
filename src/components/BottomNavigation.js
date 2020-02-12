import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'

const ButtomNavigation = () => {
  return (
    <View>
      <View style={ styles.buttonNavigation }>
        <TouchableWithoutFeedback onPress={() => console.log('Button Clicked')}>
          <View style={ styles.blueContainer}>
            <Image
              source={ require('../../assets/button-plus.png') }
              style={ styles.buttonIcon}
            ></Image>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={ styles.bottomView }>
        <View style={{ flexDirection: 'row', marginTop: -5 }}>
          <View style={{ marginTop: 5 }}>
            <Image
              source={ require('../../assets/user.png')}
              style={ styles.navIcons }
            ></Image>
            <Text style={ styles.iconText }>Account</Text>
          </View>
          <View style={{ marginTop: 5, marginLeft: 25 }}>
            <Image
              source={ require('../../assets/wallet.png')}
              style={ styles.navIcons }
            ></Image>
            <Text style={ styles.iconText }>Wallet</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: -5 }}>
          <View style={{ marginTop: 5 }}>
            <Image
              source={ require('../../assets/future.png')}
              style={ styles.navIcons }
            ></Image>
            <Text style={ styles.iconText }>Errands</Text>
          </View>
          <View style={{ marginTop: 5, marginLeft: 25 }}>
            <Image
              source={ require('../../assets/bell.png')}
              style={ styles.navIcons }
            ></Image>
            <Text style={ styles.iconText }>Notifs</Text>
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
    bottom: 35,
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
    width: 30,
    height: 30,
    position: 'absolute',
    left: 20,
    top: 20
  },
  bottomView: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3
    },
    paddingBottom: 12,
    bottom: 0,
    height: 66,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderTopColor: '#D3D3D3',
    borderTopWidth: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  navIcons: {
    width: 25,
    height: 25,
    alignSelf: 'center'
  },
  iconText: {
    color: '#909090',
    fontSize: 12,
    paddingBottom: 10
  }
})

export default ButtomNavigation