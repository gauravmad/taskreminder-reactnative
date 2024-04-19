import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import { useFonts } from "@expo-google-fonts/montserrat";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat: require("./src/assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Navigation />
          <StatusBar style="dark" />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    fontFamily: "Montserrat",
    backgroundColor: "#fff",
  },
});
