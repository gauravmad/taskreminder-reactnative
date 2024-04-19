import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../screens/MainApp/Home";
import Settings from "../../screens/MainApp/Settings";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialTopTabNavigator();

export default function MainStack() {
  return (
    <LinearGradient
      colors={["#00FFD1", "#000AFF"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className=" h-full">
        <View className="h-[12vh]">
          <StatusBar style="light" />
          <Text className="text-white mt-[5vh] text-center text-[2.7vh] font-semibold">
            Task Reminder
          </Text>
        </View>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: true,
            tabBarInactiveTintColor: "#467bff",
            tabBarActiveTintColor: "#000AFF",
            tabBarIndicatorStyle: {
              backgroundColor: "#467bff",
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
                        ? "text-[#467bff] font-bold"
                        : "text-[#7e8494] font-bold"
                    }`}
                  >
                    Home
                  </Text>
                  <MaterialCommunityIcons
                    name="home"
                    color={`${focused ? "#467bff" : "#7e8494"}`}
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
                        ? "text-[#467bff] font-bold"
                        : "text-[#7e8494] font-bold"
                    }`}
                  >
                    Profile
                  </Text>
                  <FontAwesome
                    name="user-circle"
                    color={`${focused ? "#467bff" : "#7e8494"}`}
                    size={24}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </LinearGradient>
  );
}
