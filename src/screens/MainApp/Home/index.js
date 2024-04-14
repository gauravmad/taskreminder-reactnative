import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useRef } from "react";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BusStop from "../../../data/BusStop";
import QRCode from "react-native-qrcode-svg";

export default function Home() {
  const [selectedStart, setSelectedStart] = useState("");
  const [selectedEnd, setSelectedEnd] = useState("");
  const [showQR, setShowQR] = useState(false);
  const startBottomSheetModalRef = useRef(null);
  const endBottomSheetModalRef = useRef(null);

  const openStartBottomSheet = () =>
    startBottomSheetModalRef.current?.present();
  const openEndBottomSheet = () => endBottomSheetModalRef.current?.present();

  const handleTicketPass =()=>{
    setShowQR(true);
  }

  return (
    <BottomSheetModalProvider>
      <View className="bg-[#fdfdfd] h-full">
        <View className="w-[90%] mx-auto pt-[5vh]">
          <TouchableOpacity
            onPress={openStartBottomSheet}
            style={styles.header}
            className="bg-white border-2 border-gray-200 rounded-lg pl-[1vh] flex flex-row items-center pr-[1vh] justify-between my-[1.5vh]"
          >
            <TextInput
              placeholder="Enter Start Destination"
              className="p-[1vh] text-[2.1vh] text-black"
              value={selectedStart}
              editable={false}
            />
            <TouchableOpacity onPress={openStartBottomSheet}>
              <MaterialCommunityIcons
                name="magnify"
                color="#181818"
                size={30}
              />
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openEndBottomSheet}
            style={styles.header}
            className="bg-white border-2 border-gray-200 rounded-lg pl-[1vh] flex flex-row items-center pr-[1vh] justify-between my-[1.5vh]"
          >
            <TextInput
              placeholder="Enter End Destination"
              className="p-[1vh] text-[2.1vh] text-black"
              value={selectedEnd}
              editable={false}
            />
            <TouchableOpacity onPress={openEndBottomSheet}>
              <MaterialCommunityIcons
                name="magnify"
                color="#181818"
                size={30}
              />
            </TouchableOpacity>
          </TouchableOpacity>

          {selectedStart && selectedEnd ? (
            <TouchableOpacity onPress={handleTicketPass} className="bg-[#181818] py-[1.5vh] rounded-lg mt-[1vh]">
            <Text className="text-white text-[2.3vh] font-semibold text-center">Get Ticket Pass</Text>
          </TouchableOpacity>
          ):null}
          

          {/* Generate QR Code */}
          {showQR ? (
            <View className="mx-auto mt-[4vh]">
              <QRCode
                value={`Start: ${selectedStart}, End: ${selectedEnd}`}
                size={200}
              />
            </View>
          ) : null}

          {/* Start Destination */}
          <BottomSheetModal
            ref={startBottomSheetModalRef}
            index={0}
            snapPoints={["45%", "100%"]}
            enablePanDownToClose={true}
            backgroundComponent={({ style }) => (
              <LinearGradient
                colors={["#111", "#111"]}
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
            <FlatList
              data={BusStop}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                    className="w-[90%] mx-auto"
                    onPress={() => {
                      setSelectedStart(item.name);
                      endBottomSheetModalRef.current?.close();
                    }}
                  >
                    <ScrollView>
                      <Text className="text-[2.3vh] my-[0.5vh] bg-white text-[#111] p-[1vh] rounded-lg">
                        {item.name}
                      </Text>
                    </ScrollView>
                  </TouchableOpacity>
              )}
            />
          </BottomSheetModal>

          {/* End Destination */}
          <BottomSheetModal
            ref={endBottomSheetModalRef}
            index={0}
            snapPoints={["45%", "100%"]}
            enablePanDownToClose={true}
            backgroundComponent={({ style }) => (
              <LinearGradient
                colors={["#111", "#111"]}
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
            <ScrollView vertical={true}>
              <FlatList
                data={BusStop.filter((item) => item.name !== selectedStart)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="w-[90%] mx-auto"
                    onPress={() => {
                      setSelectedEnd(item.name);
                      endBottomSheetModalRef.current?.close();
                    }}
                  >
                    <ScrollView>
                      <Text className="text-[2.3vh] my-[0.5vh] bg-white text-[#111] p-[1vh] rounded-lg">
                        {item.name}
                      </Text>
                    </ScrollView>
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
          </BottomSheetModal>
        </View>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColosr: "#fff",
    shadowColor: "#747474",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
