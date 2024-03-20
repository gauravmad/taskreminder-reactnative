import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown:false}}>
        <Stack.Screen name='AuthStack' component={AuthStack}/>
      </Stack.Group>
    </Stack.Navigator>
  )
};