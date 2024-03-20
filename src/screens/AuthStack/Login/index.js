import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SignUp from '../SignUp';

export default function Login() {

  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-[4vh] font-semibold">Login</Text>
      <TouchableOpacity 
        className="bg-fuchsia-700 p-[2vh] mt-[3vh]"
        onPress={()=>navigation.navigate(SignUp)}
      >
        <Text className="text-white text-[3vh]">SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}