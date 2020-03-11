import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { TabView } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import OutgoingErrand from '../components/OutgoingErrand'
import BidsComponent from '../components/BidsComponent'
import CompletedComponent from '../components/CompletedComponent'

const FirstRoute = () => (
  <View>
    <OutgoingErrand />
  </View>
);

const SecondRoute = () => (
  <View>
    <BidsComponent />
  </View>
);

const ThirdRoute = () => (
  <View>
    <CompletedComponent />
  </View>
);

export default class ErrandScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Ongoing', active: 0 },
      { key: 'second', title: 'Bids', active: 1 },
      { key: 'third', title: 'Completed', active: 2 }
    ]
  }

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View>
        <View style={ styles.mainHeader }>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Section')}
            activeOpacity={1}
            >
            <Image
              source={ require('../../assets/back.png')}
              style={ styles.headerIcon }
            ></Image>
          </TouchableOpacity>
          <Text style={ styles.headerText }>My Errands</Text>
        </View>
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );

          return (
            <TouchableOpacity
              style={styles.tabItem}
              key={route.key}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text
              style={{
                fontSize: 16
              }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
      </View>
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute />;
      case 'second':
        return <SecondRoute />;
      case 'third':
        return <ThirdRoute />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    )
  }
}

const styles = StyleSheet.create({

  mainHeader: {
    marginTop: 50,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '64%'
  },

  headerIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: -12,
    elevation: 2
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent'
  },
  headerText: {
    fontSize: 20,
    color: '#6E6C6C',
    marginTop: -5
  }

})