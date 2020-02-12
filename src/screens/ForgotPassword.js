import React from 'react'
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const ForgotPassword = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={ styles.body }
    >
      <View style={ styles.header }>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../../assets/back.png')}
            style={ styles.icon }
          >
          </Image>
        </TouchableOpacity>
        </View>
        <View style={ styles.container }>
          <Text style={ styles.bigText }>Forgot Password</Text>
          <Text style={ styles.smallText }>Can't remember your password?</Text>
        </View>
        <View style={ styles.formContainer }>
          <View>
            <Text style={ styles.formText }>Enter your Email here</Text>
            <TextInput
              placeholder="Your Email"
              style={ styles.formInput }
            >
            </TextInput>
          </View>
          <View style={ styles.resetContainer }>
            <Text style={{ color: '#4A66F4', fontSize: 16 }}>Didn't Receive link? Resend</Text>
            <TouchableOpacity 
             style={ styles.submitButton }
             onPress={() => navigation.navigate('Reset')}
          >
            <Text style={ styles.submitText }>Send</Text>
          </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
    borderColor: '#ffffff'
  },
  icon: {
    marginVertical: 30,
    marginTop: 40,
    marginHorizontal: 20,
    width: 20,
    height: 20
  },
  container: {
    paddingHorizontal: 30
  },
  bigText: {
    fontSize: 32,
    color: '#6B6B6B'
  },
  smallText: {
    color: '#BEBEBE',
    fontSize: 17,
    paddingTop: 5
  },
  formContainer: {
    paddingHorizontal: 30,
    marginTop: 45
  },
  formInput: {
    borderColor: '#BEBEBE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 15
  },
  formText: {
    color: '#6B6B6B',
    fontSize: 17
  },
  resetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: '#0086B9',
    justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 40,
    padding: 15,
    borderRadius: 15,
    shadowColor: 'rgba(0, 134, 185, .4)', // IOS
    shadowOffset: { height: 4, width: 4 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    flexDirection: 'row',
    width: '85%'
  },
  submitText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600'
  }
})

export default ForgotPassword