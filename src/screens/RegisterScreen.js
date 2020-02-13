import React from 'react'
import { Text, StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Image } from 'react-native'

const LoginScreen = ({ navigation}) => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ styles.body }
      >
      <View style={ styles.header }>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Image
            source={require('../../assets/back.png')}
            style={ styles.icon }
          >
          </Image>
        </TouchableOpacity>
      </View>
      <View style={ styles.container }>
        <Text style={ styles.bigText }>Create an Account</Text>
        <Text style={ styles.smallText }>Fill in your details</Text>
      </View>
      <View style={ styles.formContainer }>
        <View style={ styles.formItems }>
          <View style={ styles.firstInput}>
            <Text style={styles.formText }>First Name</Text>
            <TextInput
              placeholder='First Name'
              style={ styles.formInput }
            >
            </TextInput>
            </View>
            <View style={ styles.firstInput}>
            <Text style={styles.formText }>Last Name</Text>
              <TextInput
              placeholder='Last Name'
              style={ styles.formInput }
              >
              </TextInput>
            </View>
        </View>
        <View style={ styles.firstInput }>
          <Text style={styles.formText }>Phone Number</Text>
          <TextInput
            placeholder="E.g 0810 100 0000"
            style={ styles.formInput }
            keyboardType={'numeric'}
          >
            </TextInput>
        </View>
        <View style={ styles.firstInput }>
          <Text style={styles.formText }>Password</Text>
          <TextInput
            placeholder="Your Password"
            style={ styles.formInput }
            secureTextEntry={true}
          >
            </TextInput>
        </View>
        <View style={ styles.firstInput }>
          <Text style={styles.formText }>Confirm Password</Text>
          <TextInput
            placeholder="Confirm Password"
            style={ styles.formInput }
            secureTextEntry={true}
          >
            </TextInput>
        </View>
        <TouchableOpacity 
             style={ styles.submitButton }
          >
            <Text style={ styles.submitText }>Register</Text>
          </TouchableOpacity>
          <View style={ styles.socialText }>
          <View style={ styles.horizontalLine }></View>
          <Text style={ styles.horizontalText }>Or Register With </Text>
          <View style={ styles.horizontalLine }></View>
        </View>
        <View style={ styles.socialContainer }>
          <Image
            source={ require('../../assets/google.png')}
            style={styles.socialIcon }
          ></Image>
          <Image
            source={ require('../../assets/facebook-icon.png')}
            style={styles.socialIcon }
          ></Image>
        </View>
        <View style={ styles.bottomText }>
          <Text style={ styles.user }>Already have an account?</Text>
          <Text
            style={ styles.register }
            onPress={() => navigation.navigate('Login')}
          >Login</Text>
          </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginVertical: 30,
    marginHorizontal: 20,
    marginTop: 40,
    width: 20,
    height: 20
  },
  body: {
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
    borderColor: '#ffffff'
  },
  formText: {
    color: '#6B6B6B',
    fontSize: 17,
    fontFamily: 'muli-regular'
  },
  body: {
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
    borderColor: '#ffffff'
  },
  container: {
    paddingHorizontal: 30
  },
  bigText: {
    fontSize: 30,
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
    marginTop: 20
  },
  formInput: {
    borderColor: '#BEBEBE',
    paddingHorizontal: 33,
    paddingVertical: 10,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 15
  },
  formItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300
  },
  firstInput: {
    paddingRight: 10,
    paddingVertical: 10
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#0086B9',
    justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: 3,
    padding: 15,
    borderRadius: 15,
    shadowColor: 'rgba(0, 134, 185, 1)', // IOS
    shadowOffset: { height: 4, width: 4 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    flexDirection: 'row',
  },
  submitText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'muli-regular'
  },
  socialText: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
    fontFamily: 'muli-regular'
  },
  horizontalLine: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#C8C8C8',
    width: 92
  },
  horizontalText: {
    color: '#515151',
    fontFamily: 'muli-regular'
  },
  socialContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 70
  },
  socialIcon: {
    width: 60,
    height: 60
  },
  bottomText: {
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'muli-regular'
  },
  user: {
   paddingRight: 10,
   color: '#707070',
   fontSize: 16,
   fontFamily: 'muli-regular'
  },
  register: {
    fontSize: 16,
    color: '#637BF5',
    marginLeft: -6,
    fontFamily: 'muli-regular'
  }
})

export default LoginScreen