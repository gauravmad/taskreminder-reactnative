import { View, Text, Image } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";

export default function Settings() {
  const BottomSheetModalRef = useRef(null);

  useEffect(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  return (
    <BottomSheetModalProvider>
      <View className="w-[90%] mx-auto mt-[3vh]">
        <Image
          className="w-[20vh] h-[20vh] rounded-full mx-auto my-[2vh]"
          source={require("../../../assets/images/mypic.webp")}
        />
        <Text className="text-center text-[3vh] font-semibold my-[0vh] text-cyan-600">
          Hello Gaurav, 19
        </Text>
      </View>
      {/* <BottomSheetModal
        ref={BottomSheetModalRef}
        index={0}
        snapPoints={["65%", "90%"]}
        enablePanDownToClose={false}
        backgroundComponent={({ style }) => (
          <LinearGradient
            colors={["#fff", "#0085FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[
              style,
              {
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                backgroundColor: "#11111",
              },
            ]}
          />
        )}
      >
        <View>
          <Text className="text-center text-[2.6vh] font-semibold my-[2vh]">
            Hello Gaurav
          </Text>
        </View>
      </BottomSheetModal> */}
    </BottomSheetModalProvider>
  );
}
