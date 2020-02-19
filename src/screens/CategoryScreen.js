import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Row } from 'react-native-easy-grid'

export default class PostErrands extends Component {
  render() {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={ styles.body }
        >
        <View>
        <View style={ styles.steps }>
          <View style={ styles.subHeaderTextContainer }>
            <Text style={ styles.subHeaderText }>What Kind of Errand?</Text>
          </View>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/delivery.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Pick-up &amp; Delivery</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/shopping.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Shopping</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/shopping.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Shopping</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/car.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Transportation</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/food.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Food/Snack Purchase</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/Gardening.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Gardening</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/baby-sit.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Baby Sitting</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/laundry.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Laundry</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/cleaning.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Cleaning</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/book.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Reading Assistance</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/moving.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Moving Services</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/idea.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Artisan Services</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/ticket.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Ticket Purchase</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/dish.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Chaffer</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/mechanic.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Auto Service</Text>
          </Row>
          <Row style={ styles.errandContainer }>
            <Image
              source={ require('../../assets/swipe-right.png')}
              style={ styles.errandIcon }
            ></Image>
            <Text style={ styles.errandText }>Others</Text>
          </Row>

          <View style={{
            width: '34%',
            alignSelf: 'flex-end',
            marginRight: 30
          }}>
            <TouchableOpacity
              style={ styles.nextButton }
              onPress={() => this.buttonAction()}
            >
              <Text style={{
                color: '#ffffff',
                fontSize: 20
              }}>Next</Text>
              <Image
                source={ require('../../assets/arrow.png')}
                style={ styles.nextIcon }
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ScrollView>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    marginBottom: 10
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: -24,
    fontFamily: 'muli-regular',
    color: '#6B6B6B'
  },
  steps: {
    marginTop: 20
  },
  subHeaderTextContainer: {
    paddingVertical: 30
  },
  subHeaderText: {
    fontSize: 18,
    color: '#515151',
    fontFamily: 'muli-semi',
    paddingLeft: 45
  },
  errandIcon: {
    width: 25,
    height: 25,
    marginLeft: 20
  },
  errandContainer: {
    paddingVertical: 13,
    borderBottomColor: '#D9EBED',
    borderBottomWidth: 1
  },
  errandText: {
    color: '#515151',
    fontFamily: 'muli-regular',
    paddingLeft: 15
  },
  nextButton: {
    backgroundColor: '#0086B9',
    flexDirection: 'row',
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 10,
    paddingHorizontal: 20
  },
  nextIcon: {
    width: 30,
    height: 30,
    marginLeft: 10
  }
})
