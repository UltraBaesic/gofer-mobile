import React, { useEffect } from 'react'
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Header from '../components/Header'

const FeedScreen = ({ navigation }) => {

  return (
    <View>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={ styles.body }
    >
      <Header navigation={ navigation }></Header>
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
                <Image
                  source={ require('../../assets/cardImage1.jpg')}
                  style={ styles.cardImage }
                ></Image>
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
              <Image
                source={ require('../../assets/cardImage2.jpg')}
                style={ styles.cardImage }
              ></Image>
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
              <Image
                  source={ require('../../assets/cardImage3.jpg')}
                  style={ styles.cardImage }
                ></Image>
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
        <View style={{ marginTop: -120 }}>
        <View style={ styles.buttonNavigation }>
          <View>
            <TouchableOpacity style={ styles.blueContainer} onPress={() => navigation.navigate('Post')}>
              <Image
                source={ require('../../assets/button-plus.png') }
                style={ styles.buttonIcon }
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            source={ require('../../assets/bottom-nav.png')}
            style={ styles.bottomView }
          ></Image>
          <View>
            <View style={{ flexDirection: 'row', marginLeft: 10, position: 'absolute', bottom: 30 }}>
              <View>
                <Image
                  source={ require('../../assets/future.png')}
                  style={ styles.navIcons }
                ></Image>
                <Text style={ styles.iconText }>Errands</Text>
              </View>
              <View style={{ marginLeft: 33 }}>
                <Image
                  source={ require('../../assets/wallet.png')}
                  style={ styles.navIcons }
                ></Image>
                <Text style={ styles.iconText }>Wallet</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: -5, alignSelf: 'flex-end', position: 'absolute', bottom: 30 }}>
            <View style={{ marginTop: 5 }}>
              <Image
                source={ require('../../assets/user.png')}
                style={ styles.navIcons }
              ></Image>
              <Text style={ styles.iconText }>Account</Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: 25, marginRight: 10 }}>
              <Image
                source={ require('../../assets/bell.png')}
                style={ styles.navIcons }
              ></Image>
              <Text style={ styles.iconText }>Notifications</Text>
            </View>
          </View>
          </View>
        </View>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FDFDFD',
    fontFamily: 'muli-regular'
  },
  imageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120
  },
  logoText: {
    fontSize: 25,
    color: '#0086B9',
    marginTop: -4,
    fontFamily: 'muli-regular'
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
    color: '#0086B9',
    fontFamily: 'muli-regular'
  },
  avatarName: {
    color: '#6B6B6B',
    fontFamily: 'muli-regular'
  },
  time: {
    color: '#BDBDBD',
    fontFamily: 'muli-regular'
  },
  cardImage: {
    width: 260,
    height: 140,
    resizeMode: 'cover'
  },
  buttonNavigation: {
    position: 'absolute',
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    bottom: 40,
    zIndex: 40
  },
  blueContainer: {
    backgroundColor: '#0086B9',
    width: 68,
    height: 68,
    borderRadius: 100,
    position: 'relative'
  },
  buttonIcon: {
    width: 29,
    height: 29,
    position: 'absolute',
    left: 20,
    top: 19
  },
  bottomView: {
    position: 'relative',
    width: '100%',
    height: 120,
    marginTop: 30
  },
  navIcons: {
    width: 25,
    height: 25,
    alignSelf: 'center'
  },
  iconText: {
    color: '#909090',
    fontSize: 10,
    paddingBottom: 10,
    fontFamily: 'muli-regular'
  }
  
})

export default FeedScreen