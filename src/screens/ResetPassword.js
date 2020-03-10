import React from 'react'
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const ResetPassword = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={ styles.body }
    >
      <View style={ styles.header }>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          activeOpacity={1}
        >
          <Image
            source={require('../../assets/back.png')}
            style={ styles.icon }
          >
          </Image>
        </TouchableOpacity>
        </View>
        <View style={ styles.container }>
          <Text style={ styles.bigText }>Reset Password</Text>
          <Text style={ styles.smallText }>Can't remember your password?</Text>
        </View>
        <View style={ styles.formContainer }>
          <View>
            <Text style={ styles.formText }>New Password</Text>
            <TextInput
              placeholder="New Password"
              style={ styles.formInput }
            >
            </TextInput>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={ styles.formText }>Confirm Password</Text>
            <TextInput
              placeholder="Confirm Password"
              style={ styles.formInput }
            >
            </TextInput>
          </View>
          <View style={{ paddingHorizontal: 30, marginTop: 70 }}>
            <TouchableOpacity 
              style={ styles.submitButton }
              activeOpacity={1}
            >
              <Text style={ styles.submitText }>Submit</Text>
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
    marginTop: 60,
    marginBottom: 30,
    marginHorizontal: 20,
    width: 20,
    height: 20
  },
  container: {
    paddingHorizontal: 30
  },
  bigText: {
    fontSize: 32,
    color: '#6B6B6B',
    fontFamily: 'muli-regular'
  },
  smallText: {
    color: '#BEBEBE',
    fontSize: 17,
    paddingTop: 5,
    fontFamily: 'muli-regular'
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
    fontSize: 17,
    fontFamily: 'muli-regular'
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: '#0086B9',
    justifyContent: 'center',
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    shadowColor: 'rgba(0, 134, 185, .4)', // IOS
    shadowOffset: { height: 4, width: 4 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    flexDirection: 'row',
    width: '100%',
  },
  submitText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'muli-regular'
  }
})

export default ResetPassword