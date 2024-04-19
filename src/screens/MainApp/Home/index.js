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
import DateTimePicker from "@react-native-community/datetimepicker";

import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Audio } from "expo-av";

export default function Home() {
  const BottomSheetModalRef = useRef(null);

  const [submittedData, setSubmittedData] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const openTimePicker = () => {
    setShowTimePicker(true);
  };

  const openStartBottomSheet = () => BottomSheetModalRef.current?.present();

  const handleSubmit = () => {
    const newData = [...submittedData, { title, date, time }];
    setSubmittedData(newData);
    setTitle("");
    setDate("");
    setTime("");
    playReminderSound();
    BottomSheetModalRef.current?.dismiss();
  };

  const playReminderSound = async () => {
    try {
      console.log("Starting to play reminder sound...");
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/reminder.mp3")
      );
      console.log("Reminder sound loaded successfully.");
      await sound.playAsync();
    } catch (error) {}
    console.error("Error occurred while playing reminder sound:", error);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
      setDate(selectedDate.toString());
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setSelectedTime(selectedTime);
      setTime(selectedTime.toString());
    }
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (time) => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return time.toLocaleTimeString(undefined, options);
  };

  return (
    <BottomSheetModalProvider>
      <View className="bg-[#fdfdfd] h-full">
        <View className="w-[90%] mx-auto">
          <View className="flex flex-row justify-between items-center py-[1vh]">
            <Text className="text-[2.8vh] font-semibold">Hello Gaurav</Text>

            <LinearGradient
              colors={["#00FFD1", "#0085FF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="rounded-full my-[2vh]"
            >
              <TouchableOpacity
                onPress={openStartBottomSheet}
                className="p-[1.6vh] rounded-full"
              >
                <Text className="text-[2.3vh] px-[3vh] text-center text-white">
                  Add Task
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="text-[2.5vh] my-[1vh] text-center font-semibold text-cyan-600">
              Your Upcoming Tasks
            </Text>
            {submittedData.map((item, index) => (
              <View key={index} className="bg-cyan-800 p-[2vh] my-[1vh]">
                <Text className="text-white text-[2.4vh] my-[0.5vh]">
                  Task: {item.title}
                </Text>
                <Text className="text-white text-[2.4vh] my-[0.5vh]">
                  Date: {new Date(item.date).toLocaleDateString()}
                </Text>
                <Text className="text-white text-[2.4vh] my-[0.5vh]">
                  Time:{" "}
                  {new Date(item.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </View>
            ))}
          </ScrollView>

          {/* Start Destination */}
          <BottomSheetModal
            ref={BottomSheetModalRef}
            index={0}
            snapPoints={["60%", "100%"]}
            enablePanDownToClose={true}
            backgroundComponent={({ style }) => (
              <LinearGradient
                colors={["#00FFD1", "#0085FF"]}
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
            <View className=" bg-white p-[2vh] m-[3vh] rounded-2xl">
              <Text className="text-center text-cyan-600 my-[1vh] text-[2.5vh] font-bold">
                Schedule Your Task
              </Text>
              <View className="border-1 border-cyan-600 p-[1vh] my-[1vh] rounded-xl">
                <TextInput
                  placeholder="Enter title"
                  placeholderTextColor="#0085FF"
                  className="text-[2.1vh] text-cyan-600 px-[1vh]"
                  value={title}
                  onChangeText={setTitle}
                />
              </View>

              <TouchableOpacity
                onPress={openDatePicker}
                className="border-1 border-cyan-600 p-[1vh] my-[1vh] rounded-xl"
              >
                {/* <TextInput
                  placeholder="Select Date"
                  placeholderTextColor="#0085FF"
                  className="text-[2.1vh] text-cyan-600 px-[1vh]"
                  value={date}
                  onChangeText={setDate}
                /> */}
                <Text>{date ? formatDate(new Date(date)) : "Select Date"}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={openTimePicker}
                className="border-1 border-cyan-600 p-[1vh] my-[1vh] rounded-xl"
              >
                <Text>{time ? formatTime(new Date(time)) : "Select Time"}</Text>
                {/* <TextInput
                  placeholder="Select Time"
                  placeholderTextColor="#0085FF"
                  className="text-[2.1vh] text-cyan-600 px-[1vh]"
                  value={time}
                  onChangeText={setTime}
                /> */}
              </TouchableOpacity>

              <LinearGradient
                colors={["#00FFD1", "#0085FF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                // style={{ flex: 1 }}
                className="rounded-full my-[2vh]"
              >
                <TouchableOpacity
                  onPress={() => {
                    // Pass input values to the handleSubmit function
                    handleSubmit(title, date, time);
                    // Clear input fields
                    setTitle("");
                    setDate("");
                    setTime("");
                  }}
                  className="p-[1.6vh] rounded-full"
                >
                  <Text className="text-[2.3vh] text-center text-white">
                    Submit
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </BottomSheetModal>
        </View>

        {showDatePicker && (
          <DateTimePicker
            testID="datePicker"
            value={selectedDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            testID="timePicker"
            value={selectedTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={handleTimeChange}
          />
        )}
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
