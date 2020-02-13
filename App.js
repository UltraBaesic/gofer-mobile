import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Navigator from  './src/routes/index'

const getFonts = () => Font.loadAsync({
  'muli-regular': require('./assets/fonts/Muli-Regular.ttf'),
  'muli-semi': require('./assets/fonts/Muli-SemiBold.ttf'),
  'muli-medium': require('./assets/fonts/Muli-Medium.ttf'),
  'muli-bold': require('./assets/fonts/Muli-Bold.ttf')
})

export default function App() {
  const [ fontsLoaded, setFontsLoaded ] = useState(false)

  if(fontsLoaded) {
    return (
      <Navigator />
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