import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'


const WelcomeScreen = ({ navigation }) => {

  return(
      <View style={ styles.bodyStyle }>
        <View style={ styles.imageContainer }>
          <Image
              source={require('../../assets/logo_blue.png')}
              style={styles.image}
            ></Image>
          </View>
          <View style={ styles.buttonContainer }>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={ styles.registerButton }
              activeOpacity={1}
            >
              <Text style={ styles.registerText }>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={ styles.loginButton }
              activeOpacity={1}
            >
              <Text style={ styles.loginText }>Login</Text>
            </TouchableOpacity>
          </View>
      </View>
         
  )
}

const styles = StyleSheet.create({

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  image: {
    width: 70,
    height: 70,

  },
  bodyStyle: {
    marginVertical: 40,
    position: 'relative',
    flex: 1
    
  },
  buttonContainer: {
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  registerButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    color: "#ffffff",
    backgroundColor: "#0086B9",
    borderRadius: 15,
    borderWidth: 0,
    marginRight: 20
  },
  loginButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderColor: "#0086B9",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 15
  },
  registerText: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: 'muli-regular'
  },
  loginText: {
    color: "#0086B9",
    fontSize: 20,
    fontFamily: 'muli-regular'
  }
})

export default WelcomeScreen