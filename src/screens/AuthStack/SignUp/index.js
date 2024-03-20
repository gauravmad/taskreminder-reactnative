import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Login from '../Login';

export default function SignUp() {

  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-[4vh] font-semibold">Sign Up</Text>
      <TouchableOpacity 
        className="bg-fuchsia-700 p-[2vh] mt-[3vh]"
        onPress={()=>navigation.navigate(Login)}
      >
        <Text className="text-white text-[3vh]">Login</Text>
      </TouchableOpacity>
    </View>
  )
}