import { View, Text, StyleSheet } from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import Navigation from './src/navigation';
import { useFonts } from '@expo-google-fonts/montserrat';
import React from 'react'

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat: require('./src/assets/fonts/Montserrat-VariableFont_wght.ttf'),
  });

  return (
    
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    fontFamily: 'Montserrat',
  },
});