import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import CategoryScreen from '../screens/CategoryScreen'
import LocationScreen from '../screens/LocationScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ReviewScreen from '../screens/ReviewScreen'

class PostErrands extends Component {

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
    }
  };


  state = {
    modalVisible: false,
    modalVisible1: false
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalVisible2(visible) {
    this.setState({modalVisible1: visible});
  }

  onNextStep = () => {
    console.log('called next step');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    this.setModalVisible(true);
  };

  render() {
    const progressStepsStyle = {
      activeStepIconBorderColor: '#0086B9',
      labelColor: '#515151',
      activeLabelColor: '#515151',
      activeStepNumColor: '#0086B9',
      activeStepIconColor: '#0086B9',
      completedStepIconColor: '#0086B9',
      completedProgressBarColor: '#0086B9',
      completedCheckColor: '#0086B9',
      borderWidth: 2,
      progressBarColor: '#0086B9',
      labelFontFamily: 'muli-regular'
    };

    const buttonNextStyle = {
      color: '#ffffff',
      fontWeight: 'bold',
      backgroundColor: '#0086B9',
      paddingHorizontal: 50,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 20
    };

    const buttonPreviousStyle = {
      color: '#0086B9',
      fontWeight: 'bold',
      borderColor: '#0086B9',
      borderWidth: 1,
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 20
    };

    const { navigation } = this.props

    const routeToErrand = () => {
      this.setModalVisible2(!this.state.modalVisible1);
      this.setModalVisible(!this.state.modalVisible);
      navigation.navigate('Errand')
    }

    return (
      <View style={{ flex: 1, marginTop: 10, backgroundColor: '#ffffff' }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}>
          <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            paddingHorizontal: 30,
            paddingVertical: 100
          }}>
            <View style={{
              backgroundColor: '#ffffff',
              height: '65%',
              margin: 'auto',
              borderRadius: 20,
              paddingVertical: 15,
              paddingHorizontal: 20,
              position: 'relative'
            }}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={{
                  backgroundColor: '#ffffff',
                  padding: 15,
                  borderRadius: 50,
                  elevation: 5,
                  position: 'absolute',
                  right: -20,
                  top: -25
                }}
                >
                <Image
                  source={ require('../../assets/close.png') }
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain'
                  }}
                ></Image>
              </TouchableOpacity>
              <Text style={{
                marginTop: 40
              }}>
                <Text style={{
                  fontFamily: 'muli-regular',
                  color: '#0086B9',
                  fontSize: 16
                }}>Send Public </Text>
                <Text
                  style={{
                    fontFamily: 'muli-regular',
                    color: '#6B6B6B',
                    fontSize: 16
                  }}
                >allows anyone to run this errand, </Text>
                <Text
                style={{
                  fontFamily: 'muli-regular',
                  color: '#0086B9',
                  fontSize: 16
                }}
                >Send Gofer </Text>
                <Text
                style={{
                  fontFamily: 'muli-regular',
                  color: '#6B6B6B',
                  fontSize: 16,
                  lineHeight: 24
                }}>allows only Gofer to run this errand.</Text>
              </Text>
              <View style={{
                marginTop: 70,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <TouchableOpacity
                  onPress={() => {this.setModalVisible2(true)}}
                  style={{
                    borderColor: '#0086B9',
                    borderWidth: 1,
                    paddingVertical: 12,
                    paddingHorizontal: 13,
                    borderRadius: 10
                  }}
                >
                  <Text
                    style={{
                      color: '#0086B9',
                      fontSize: 16,
                      fontFamily: 'muli-semi'
                    }}
                  >Send Gopher</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {this.setModalVisible2(true)}}
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    borderRadius: 10,
                    backgroundColor: '#0086B9',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'muli-semi',
                      color: '#ffffff'
                    }}
                  >Send Public</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible1}
          onRequestClose={() => {}}>
          <View style={{
            paddingHorizontal: 25,
            paddingVertical: 30,
          }}>
            <TouchableOpacity onPress={() => {routeToErrand()}}>
              <Image
                source={ require('../../assets/close.png')}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain'
                }}
              ></Image>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50
              }}
            >
              <Text
                style={{
                  color: '#6B6B6B',
                  fontSize: 22,
                  fontFamily: 'muli-semi'
                }}
              >Errand Posted Successfully</Text>
              <Image
                source={ require('../../assets/correct.png') }
                style={{
                  width: 120,
                  height: 120,
                  marginVertical: 50,
                  resizeMode: 'contain'
                }}
              ></Image>
              <Text
                 style={{
                  color: '#6B6B6B',
                  fontSize: 18,
                  fontFamily: 'muli-regular',
                  marginVertical: 20
                }}
              >Waiting for people to bid...</Text>
              <TouchableOpacity
                onPress={() => {routeToErrand()}}
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 26,
                  borderRadius: 10,
                  backgroundColor: '#0086B9',
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'muli-bold',
                    color: '#ffffff'
                  }}
                >Track Errand</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={{
          flexDirection: 'row'
        }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Feed')}>
          <Image
            source={require('../../assets/back.png')}
            style={{
              marginTop: 30,
              marginHorizontal: 25,
              width: 20,
              height: 20
            }}
          ></Image>
        </TouchableOpacity>
        <Text style={{
          fontFamily: 'muli-semi',
          fontSize: 20,
          marginTop: 25,
          marginLeft: 50,
          alignSelf: 'center',
          color: '#6B6B6B'
        }}>Post Errands</Text>
        </View>
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            label='Catetory'
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonNextStyle}
          >
            <View style={{
              marginTop: -30
            }}>
             <CategoryScreen />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Location"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonNextStyle}
            previousBtnTextStyle={buttonPreviousStyle}
          >
            <View>
              <LocationScreen />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Details"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonNextStyle}
            previousBtnTextStyle={buttonPreviousStyle}
          >
            <View>
              <DetailsScreen />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Review"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonNextStyle}
            previousBtnTextStyle={buttonPreviousStyle}
          >
            <View>
              <ReviewScreen />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default PostErrands;