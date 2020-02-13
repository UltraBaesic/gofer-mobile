import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet, ScrollView} from 'react-native'

const PostErrands = ({ navigation }) => {
  return(
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Feed')}>
            <Image
              source={require('../../assets/back.png')}
              style={ styles.icon }
            ></Image>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginVertical: 30,
    marginTop: 40,
    marginHorizontal: 20,
    width: 20,
    height: 20
  }
})

export default PostErrands