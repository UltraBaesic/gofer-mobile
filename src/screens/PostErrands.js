import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

class PostErrands extends Component {

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
    }
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  render() {
    const progressStepsStyle = {
      activeStepIconBorderColor: '#0086B9',
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

    const buttonTextStyle = {
      color: '#686868',
      fontWeight: 'bold'
    };

    return (
      <View style={{ flex: 1, marginTop: 10, backgroundColor: '#ffffff' }}>
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
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            label='Catetory'
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{}}>
              <Text>This is the content within step 1!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Second"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Third"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Fifth"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 5!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default PostErrands;