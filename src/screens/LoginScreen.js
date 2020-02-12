import React  from "react";
import { Text, StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Image } from "react-native";

const RegisterScreen = ({ navigation }) => {
  
  return (
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
          <Text style={ styles.bigText }>Welcome Back</Text>
          <Text style={ styles.smallText }>Sign in to continue</Text>
        </View>
        <View style={ styles.formContainer }>
          <View>
            <Text style={ styles.formText }>Phone Number</Text>
            <TextInput
              placeholder="E.g 0810 100 0000"
              style={ styles.formInput }
              keyboardType={'numeric'}
            >
            </TextInput>
          </View>
          <View style={ styles.secondInput }>
            <Text style={ styles.formText }>Password</Text>
            <TextInput
              placeholder="Your Password"
              style={ styles.formInput }
            >
            </TextInput>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text style={ styles.forgotPassword }> Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
             style={ styles.submitButton }
             onPress={() => navigation.navigate('Feed')}
          >
            <Text style={ styles.submitText }>Login</Text>
          </TouchableOpacity>
          <View style={ styles.socialText }>
            <View style={ styles.horizontalLine }></View>
            <Text style={ styles.horizontalText }>Or Login With </Text>
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
              <Text style={ styles.user }>New User?</Text>
              <Text
                style={ styles.register }
                onPress={() => navigation.navigate('Register')}
              >Register</Text>
          </View>
        </View>
      </ScrollView>
  )
      
}

const styles = StyleSheet.create({
  icon: {
    marginVertical: 30,
    marginTop: 40,
    marginHorizontal: 20,
    width: 20,
    height: 20
  },
  socialIcon: {
    width: 60,
    height: 60
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
    color: '#6B6B6B'
  },
  smallText: {
    color: '#BEBEBE',
    fontSize: 17,
    paddingTop: 5
  },
  formContainer: {
    paddingHorizontal: 30,
    marginTop: 35
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
  secondInput: {
    marginTop: 30
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#4965F4',
    fontSize: 14,
    marginTop: 10
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#0086B9',
    justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: 3,
    padding: 15,
    borderRadius: 15,
    shadowColor: 'rgba(0, 134, 185, .4)', // IOS
    shadowOffset: { height: 4, width: 4 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    flexDirection: 'row',
  },
  submitText: {
    color: '#ffffff',
    fontSize: 18
  },
  socialText: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row'
  },
  horizontalLine: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#C8C8C8',
    width: 92
  },
  horizontalText: {
    color: '#515151'
  },
  socialContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 70
  },
  bottomText: {
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  user: {
   paddingRight: 10,
   color: '#707070',
   fontSize: 16
  },
  register: {
    fontSize: 16,
    color: '#637BF5',
    marginLeft: -6
  }
})

export default RegisterScreen