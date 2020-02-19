import React, { useState } from 'react'
import { YellowBox } from 'react-native'
import _ from 'lodash'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Navigator from  './src/routes/index'

const getFonts = () => Font.loadAsync({
  'muli-regular': require('./assets/fonts/Muli-Regular.ttf'),
  'muli-semi': require('./assets/fonts/Muli-SemiBold.ttf'),
  'muli-medium': require('./assets/fonts/Muli-Medium.ttf'),
  'muli-bold': require('./assets/fonts/Muli-Bold.ttf')
})

YellowBox.ignoreWarnings(['componentWillReceiveProps']);
    const _console = _.clone(console);
    console.warn = message => {
    if (message.indexOf('componentWillReceiveProps') <= -1) {
     _console.warn(message);
    } 
   };

export default function App() {
  const [ fontsLoaded, setFontsLoaded ] = useState(false)

  if(fontsLoaded) {
    return (
      <Navigator/>
    )
  } else {
    return (
      <AppLoading
        startAsync={ getFonts }
        onFinish={() => setFontsLoaded(true)}
      ></AppLoading>
    )
  }
}