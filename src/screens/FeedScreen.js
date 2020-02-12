import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import BottomNavigator from '../components/BottomNavigation'

const FeedScreen = () => {

  return (
    <View style={{ flex: 1 }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={ styles.body }
    >
      <View style={ styles.header }>
        <View style={ styles.imageHeader}>
          <Image
            source={ require('../../assets/menu.png') }
            style={{ width: 27, height: 27 }}
          ></Image>
          <Text style={ styles.logoText }>Gofer</Text>
        </View>
        <Image
          source={ require('../../assets/search.png') }
          style={{ width: 27, height: 27 }}
        ></Image>
      </View>
      <Grid style={{ marginBottom: 70 }}>
        <Row style={ styles.mainContainer }>
          <Col style={ styles.smallCol }>
            <Image
              source={ require('../../assets/avatar1.jpg') }
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
              <Text style={ styles.time }>Gardening</Text>
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
              <Text style={ styles.time }>Shopping</Text>
              </View>
            </View>
          </Col>
        </Row>
        <Row style={ styles.mainContainer }>
          <Col style={ styles.smallCol }>
            <Image
              source={ require('../../assets/avatar1.jpg') }
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
        <Row style={ styles.mainContainer }>
          <Col style={ styles.smallCol }>
            <Image
              source={ require('../../assets/avatar1.jpg') }
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
      </Grid>
    </ScrollView>
    <View>
        <BottomNavigator />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FDFDFD'
  },
  header: {
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1

  },
  imageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120
  },
  logoText: {
    fontSize: 25,
    color: '#0086B9',
    marginTop: -4
  },
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
    color: '#0086B9'
  },
  avatarName: {
    color: '#6B6B6B'
  },
  time: {
    color: '#BDBDBD'
  }
  
})

export default FeedScreen