import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

const ReviewScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={ styles.mainContainer }>
        <View style={ styles.contentContainer }>
          <Text style={ styles.heading }>Category</Text>
          <Text style={ styles.subHeading }>Pick-up &amp; Delivery</Text>
        </View>
        <View style={ styles.contentContainer }>
        <Text style={ styles.heading }>Location</Text>
          <View style={{
            flexDirection: 'row'
          }}>
            <Text style={{
              color: '#BEBEBE',
              fontSize: 16,
              marginTop: 9,
              marginRight: 7
            }}>From</Text>
            <Text style={ styles.subHeading }>Road 1, Ikota shopping complex, Ajah, Lagos</Text>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <Text style={{
              color: '#BEBEBE',
              fontSize: 16,
              marginTop: 9,
              marginRight: 7
            }}>To</Text>
            <Text style={ styles.subHeading }>Pick-up &amp; Delivery</Text>
          </View>
        </View>
        <View style={ styles.contentContainer }>
          <Text style={ styles.heading }>Get more information about this errand</Text>
          <Text style={ styles.subHeading }>I want to deliver some clothes to my Aunt that stays in Maryland urgently, before 6:00pm today</Text>
        </View>
        <View style={ styles.contentContainer }>
          <Text style={ styles.heading }>Reward</Text>
          <Text style={{
            color: '#232323',
            fontFamily: 'muli-semi',
            fontSize: 15,
            paddingVertical: 10,
            paddingRight: 9
          }}>{'\u20A6'} 2,500</Text>
        </View>
        <View style={ styles.contentContainer }>
          <Text style={ styles.heading }>Deadline</Text>
          <Text style={ styles.subHeading }>17th Feburary, 2019.&nbsp;6:00pm</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 35,
    paddingHorizontal: 20
  },
  heading: {
    color: '#BEBEBE',
    fontSize: 18,
    fontFamily: 'muli-semi'
  },
  subHeading: {
    color: '#232323',
    fontFamily: 'muli-regular',
    fontSize: 15,
    paddingVertical: 10,
    paddingRight: 9
  },
  contentContainer: {
    borderBottomColor: '#D9EBED',
    borderBottomWidth: 1,
    marginBottom: 20
  }
})

export default ReviewScreen