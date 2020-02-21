import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Switch } from 'react-native'

export default class DetailsScreen extends Component {
  state = {isSwitchOn: false}

  showCalculation = () => {
    if (this.state.isSwitchOn) {
      console.log('this is on')
    } else {
      console.log('this is off')
    }
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={ styles.mainContainer }>
          <Text style={ styles.headerText }>Errand Details</Text>
          <View>
            <Text style={ styles.inputLabel }>Give more information about your errand </Text>
            <View style={ styles.textAreaContainer }>
              <TextInput 
                style={ styles.textArea }
                placeholderTextColor='#BEBEBE'
                placeholder='I want...'
                multiline={true}
                numberOfLines={3}
              />
            </View>
            <View style={styles.secondContainer }>
              <Text style={ styles.secondHeaderText }>How much are you willing to pay?</Text>
              <Text style={ styles.secondHeaderSubText }>(this includes all cost of running this errand)</Text>
              <TextInput
                style={ styles.smallInput }
                placeholder='0.00'
              />
            </View>
            <View style={styles.secondContainer }>
              <Text style={ styles.secondHeaderText }>Deadline</Text>
              <TextInput
                style={ styles.smallInput }
                placeholder='0.00'
              />
            </View>
            <View style={styles.secondContainer }>
              <Text style={ styles.secondHeaderText }>Do you want insurance on this errand?</Text>
              <View style={{
                alignSelf: 'flex-start',
                paddingVertical: 10,
                marginBottom: 30
              }}>
                <Switch 
                  onValueChange={(isSwitchOn )=> this.setState({isSwitchOn})}
                  value={this.state.isSwitchOn}
                  trackColor={
                    {
                      false: '#BEBEBE',
                      true: '#0086B9'
                    }
                  }
                  thumbColor='#ffffff'
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
  
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 25,
    paddingVertical: 20
  },
  headerText: {
    fontFamily: 'muli-semi',
    fontSize: 19,
    fontWeight: '600',
    color: '#6B6B6B',
    paddingLeft: 10,
    paddingBottom: 20
  },
  inputLabel: {
    color: '#6B6B6B',
    fontFamily: 'muli-semi',
    marginBottom: 10,
    fontSize: 16
  },
  textAreaContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#D9EBED',
    borderRadius: 10
  },
  textArea: {
    height: 70,
    justifyContent: "flex-start",
    textAlignVertical: 'top',
    padding: 10
  },
  secondContainer: {
    marginTop: 20
  },
  secondHeaderText: {
    color: '#6B6B6B',
    fontFamily: 'muli-semi',
    fontSize: 16
  },
  secondHeaderSubText: {
    fontFamily: 'muli-regular',
    fontSize: 12,
    color: '#0086B9'
  },
  smallInput: {
    borderWidth: 1,
    borderColor: '#D9EBED',
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 10,
    paddingLeft: 15
  }
})