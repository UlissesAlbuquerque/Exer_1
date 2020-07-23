import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Reactotron from 'reactotron-react-native'
import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'))

import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider } from 'react-native-paper';

import Home from './components/pages/Home'
import Auth from './components/navigators/Auth';


const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Auth />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
