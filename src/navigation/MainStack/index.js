import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../screens/MainApp/Home";
import Settings from "../../screens/MainApp/Settings";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialTopTabNavigator();

export default function MainStack() {
  return (
    <View className="bg-white h-full">
      <View className="bg-[#181818] h-[12vh]">
        <StatusBar style="light" />
        <Text className="text-white mt-[5vh] text-center text-[2.7vh] font-semibold">Bus Pass</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarInactiveTintColor: "#7E8494",
          tabBarActiveTintColor: "#181818",
          tabBarIndicatorStyle: {
            backgroundColor: "#181818",
            marginBottom: -2,
          },
          tabBarStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#Fff",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({ focused }) => (
              <View className="flex flex-row justify-center items-center">
                <Text
                  className={`text-[2.2vh] mr-[1vh] ${
                    focused
                      ? "text-[#181818] font-bold"
                      : "text-[#7e8494] font-bold"
                  }`}
                >
                  Home
                </Text>
                <MaterialCommunityIcons
                  name="home"
                  color={`${focused ? "#181818" : "#7e8494"}`}
                  size={24}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: ({ focused }) => (
              <View className="flex flex-row justify-center items-center">
                <Text
                  className={`text-[2.2vh] mr-[1vh] ${
                    focused
                      ? "text-[#181818] font-bold"
                      : "text-[#7e8494] font-bold"
                  }`}
                >
                  Profile
                </Text>
                <FontAwesome
                  name="user-circle"
                  color={`${focused ? "#181818" : "#7e8494"}`}
                  size={24}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
