import React from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, Animated, Dimensions, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid';

const { width } = Dimensions.get('window')

export default class ErrandScreen extends React.Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    xTabThree: 0,
    translateX: new Animated.Value(0),
    translateTabOne: new Animated.Value(0),
    translateTabTwo: new Animated.Value(width),
    translateTabThree: new Animated.Value(width),
  };

   constructor(props) {
    super(props);
  }

  handleSlide = type => {
    let { active, translateX, translateTabOne, translateTabTwo, translateTabThree } = this.state
    Animated.spring(translateX, {
      toValue: type,
      duration: 100
    }).start()
    if(active === 0){
      Animated.parallel([
        Animated.spring(translateTabOne, {
          toValue: 0,
          duration: 100
        }).start(),
        Animated.spring(translateTabTwo, {
          toValue: width,
          duration: 100
        }).start(),
        Animated.spring(translateTabThree, {
          toValue: width,
          duration: 100
        }).start()
      ])
    } if(active === 1) {
      Animated.parallel([
        Animated.spring(translateTabOne, {
          toValue: -width,
          duration: 100
        }).start(),
        Animated.spring(translateTabTwo, {
          toValue: 0,
          duration: 100
        }).start(),
        Animated.spring(translateTabThree, {
          toValue: -width,
          duration: 100
        }).start()
      ])
    } if(active === 2) {
      Animated.parallel([
        Animated.spring(translateTabOne, {
          toValue: -width,
          duration: 100
        }).start(),
        Animated.spring(translateTabTwo, {
          toValue: -width,
          duration: 100
        }).start(),
        Animated.spring(translateTabThree, {
          toValue: -0,
          duration: 100
        }).start()
      ])
    }
  }


  render() {
    let { active, xTabOne, xTabTwo, xTabThree, translateX, translateTabOne, translateTabTwo, translateTabThree } = this.state
    return (
      <View
        style={{
          backgroundColor: '#ffffff'
        }}
      >
        <View style={ styles.tabContainer }>
          <Row>
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('Errand')}
              >
              <Image
                source={ require('../../assets/back.png')}
                style={ styles.icon }
              ></Image>
            </TouchableOpacity>
            <Text style={ styles.headerText }>My Errands</Text>
          </Row>
        </View>
          <View style={{
              width: '100%',
              height: 56,
              position: 'relative',
              marginTop: 10
              }}>
            <View 
              style={{
                flexDirection: 'row',
                marginTop: 20
              }}
              >
              <Animated.View
                style={{
                  position: 'absolute',
                  width: '33%',
                  height: '100%',
                  top: 9,
                  left: 0,
                  borderBottomWidth: 3,
                  borderBottomColor: '#0086B9',
                  transform: [
                    {
                      translateX
                    }
                  ]
                }}
              />
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                onLayout={event => this.setState({xTabOne: event.nativeEvent.layout.x})}
                onPress={() => this.setState({ active: 0 }, () => this.handleSlide(xTabOne))}
              >
                <Text 
                  style={{
                    color: active === 0 ? '#0086B9' : '#6B6B6B',
                    fontSize: 18,
                    fontFamily: 'muli-regular',
                    fontWeight: active === 0 ? 'bold' : '400'
                  }}>
                    Ongoing
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                onLayout={event => this.setState({xTabTwo: event.nativeEvent.layout.x})}
                onPress={() => this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))}
              >
                <Text 
                  style={{
                    color: active === 1 ? '#0086B9' : '#6B6B6B',
                    fontSize: 18,
                    fontFamily: 'muli-regular',
                    fontWeight: active === 1 ? 'bold' : '400'
                  }}>
                  Bids
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                onLayout={event => this.setState({xTabThree: event.nativeEvent.layout.x})}
                onPress={() => this.setState({ active: 2 }, () => this.handleSlide(xTabThree))}
              >
                <Text 
                  style={{
                    color: active === 2 ? '#0086B9' : '#6B6B6B',
                    fontSize: 18,
                    fontFamily: 'muli-regular',
                    fontWeight: active === 2 ? 'bold' : '400'
                  }}>
                    Completed
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
        <ScrollView 
          style={{ backgroundColor: '#ffffff' }}
          ref={this.scrollRef}
          showsVerticalScrollIndicator={false}
        >
            <Animated.View
              style={{
                marginVertical: 13,
                transform: [
                  {
                    translateX: translateTabOne
                  }
                ]
              }}
              onLayout={event => this.setState({ translateY: event.nativeEvent.layout.height})}
            >
        <View>
          
        </View>
      </Animated.View>
      <Animated.View
        style={{
          marginVertical: 13,
          transform: [
            {
              translateX: translateTabTwo
            }
          ]
          }}
          >
        
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: translateTabThree
            }
          ]
        }}
      >
       
      </Animated.View>
      </ScrollView>
    </View>
  )
  }}

const styles = StyleSheet.create({
  icon: {
    marginVertical: 30,
    marginTop: 30,
    marginHorizontal: 20,
    width: 20,
    height: 20
  },
  headerText: {
    fontSize: 25,
    color: '#6B6B6B',
    fontFamily: 'muli-regular',
    marginTop: 20,
    textAlign: 'center',
    width: '65%'
  },
  tabContainer: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 57,
    position: 'relative',
    backgroundColor: '#ffffff'
  },
  innerContainer: {
    flexDirection: 'row',
    marginVertical: 19
  },
  tabSection: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tabText: {
    color: 'red'
  }
})
