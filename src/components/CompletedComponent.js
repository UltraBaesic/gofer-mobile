import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'

const CompletedComponent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={ styles.body }
    >
      <View>
        <Row>
          <Image
              source={ require('../../assets/success.png') }
              style={ styles.status }
            ></Image>
          <Row style={ styles.mainContainer }>
          <Col style={ styles.smallCol }>
            <Image
              source={ require('../../assets/avatar2.jpg') }
              style={ styles.avatarImage }
            ></Image>
          </Col>
          <Col>
            <View>
              <View style={ styles.detailsHeader }>
                <View>
                  <Text style={ styles.avatarName }>Benita Johnson</Text>
                  <Row>
                    <Image
                      source={ require('../../assets/star.png') }
                      style={ styles.starIcon }
                    ></Image>
                     <Image
                      source={ require('../../assets/star.png') }
                      style={ styles.starIcon }
                    ></Image>
                     <Image
                      source={ require('../../assets/star.png') }
                      style={ styles.starIcon }
                    ></Image>
                     <Image
                      source={ require('../../assets/star.png') }
                      style={ styles.starIcon }
                    ></Image>
                     <Image
                      source={ require('../../assets/star.png') }
                      style={ styles.starIcon }
                    ></Image>
                  </Row>
                  <View style={ styles.locationContainer }>
                    <Text style={ styles.time }>32 completed errands</Text>
                  </View>
                </View>
              </View>
              <View style={ styles.textContainer }>
                <Text style={ styles.avatarName }>I am in Ajah, i need someone to help me pick up my clothes from my friend in Ikeja Along before 6:00pm today.</Text>
              </View>
              <View style={ styles.more }>
              <View style={ styles.moreDeets }>
                <Text style={ styles.smallText }>{'\u20A6'}</Text>
                <Text style={ styles.smallText }>2,000</Text>
              </View>
              <Text style={ styles.time }>Gardening</Text>
              </View>
            </View>
          </Col>
        </Row>
        </Row>
      </View>
        <Row style={ styles.mainContainer }>
          <Col style={ styles.smallCol }>
            <Image
              source={ require('../../assets/avatar3.jpg') }
              style={ styles.avatarImage }
            ></Image>
          </Col>
          <Col>
            <View>
              <View style={ styles.detailsHeader }>
                <View>
                  <Text style={ styles.avatarName }>Jane Doe</Text>
                  <View style={ styles.locationContainer }>
                    <Image
                      source={ require('../../assets/pin.png') }
                      style={ styles.locationImage }
                    >
                    </Image>
                    <Text style={ styles.time }>Ajah, Lagos</Text>
                  </View>
                </View>
              </View>
              <View style={ styles.textContainer }>
                <Text style={ styles.avatarName }>I am in Ajah, i need someone to help me pick up my clothes from my friend in Ikeja Along before 6:00pm today.</Text>
              </View>
              <View style={ styles.more }>
              <View style={ styles.moreDeets }>
                <Text style={ styles.smallText }>{'\u20A6'}</Text>
                <Text style={ styles.smallText }>2,000</Text>
              </View>
              <Text style={ styles.time }>Artisan</Text>
              </View>
            </View>
          </Col>
        </Row>
        <Row style={ styles.mainContainer }>
          <Col style={ styles.smallCol }>
            <Image
              source={ require('../../assets/avatar3.jpg') }
              style={ styles.avatarImage }
            ></Image>
          </Col>
          <Col>
            <View>
              <View style={ styles.detailsHeader }>
                <View>
                  <Text style={ styles.avatarName }>Jane Doe</Text>
                  <View style={ styles.locationContainer }>
                    <Image
                      source={ require('../../assets/pin.png') }
                      style={ styles.locationImage }
                    >
                    </Image>
                    <Text style={ styles.time }>Ajah, Lagos</Text>
                  </View>
                </View>
              </View>
              <View style={ styles.textContainer }>
                <Text style={ styles.avatarName }>I am in Ajah, i need someone to help me pick up my clothes from my friend in Ikeja Along before 6:00pm today.</Text>
              </View>
              <View style={ styles.more }>
              <View style={ styles.moreDeets }>
                <Text style={ styles.smallText }>{'\u20A6'}</Text>
                <Text style={ styles.smallText }>2,000</Text>
              </View>
              <Text style={ styles.time }>Pick-up &amp; Delivery</Text>
              </View>
            </View>
          </Col>
        </Row>
        <Row style={ styles.mainContainer }>
          <Col style={ styles.smallCol }>
            <Image
              source={ require('../../assets/avatar3.jpg') }
              style={ styles.avatarImage }
            ></Image>
          </Col>
          <Col>
            <View>
              <View style={ styles.detailsHeader }>
                <View>
                  <Text style={ styles.avatarName }>Jane Doe</Text>
                  <View style={ styles.locationContainer }>
                    <Image
                      source={ require('../../assets/pin.png') }
                      style={ styles.locationImage }
                    >
                    </Image>
                    <Text style={ styles.time }>Ajah, Lagos</Text>
                  </View>
                </View>
                <Text style={ styles.time }>2 hrs to go</Text>
              </View>
              <View style={ styles.textContainer }>
                <Text style={ styles.avatarName }>I am in Ajah, i need someone to help me pick up my clothes from my friend in Ikeja Along before 6:00pm today.</Text>
              </View>
              <View style={ styles.more }>
              <View style={ styles.moreDeets }>
                <Text style={ styles.smallText }>{'\u20A6'}</Text>
                <Text style={ styles.smallText }>2,000</Text>
              </View>
              <Text style={ styles.time }>Pick-up &amp; Delivery</Text>
              </View>
            </View>
          </Col>
        </Row>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 3,
    paddingVertical: 20,
    paddingBottom: 20,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1
  },
  smallCol: {
    width: 65
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  detailsHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  locationContainer: {
    flexDirection: 'row',
    paddingTop: 3
  },
  locationImage: {
    width: 13,
    height: 13,
    marginTop: 3
  },
  textContainer: {
    paddingTop: 10
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  moreDeets: {
    flexDirection: 'row'
  },
  smallText:{
    color: '#0086B9',
    fontFamily: 'muli-regular',
    fontWeight: 'bold'
  },
  avatarName: {
    color: '#6B6B6B',
    fontFamily: 'muli-regular'
  },
  time: {
    color: '#BDBDBD',
    fontFamily: 'muli-regular'
  },
  starIcon: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
    marginVertical: 2
  },
  
})

export default CompletedComponent