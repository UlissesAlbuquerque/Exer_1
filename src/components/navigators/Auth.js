import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home'
import Details from '../pages/Details'


const Stack = createStackNavigator()

const Auth = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    )
}

export default Auth