import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "../../components";

export default function MyDetails() {
  const titles = ["Họ và tên", "Số điện thoại", "Email"];
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    dob: new Date(),
  });
  const formattedDob = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(details.dob);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || details.dob;
    setShow(false);
    setDetails({ ...details, dob: currentDate });
  };

  const handleShowDatePicker = () => {
    setShow(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-6 py-4">
      {/* Input Fields */}
      <View className="w-full space-y-4">
        {titles.map((title, index) => (
          <View key={index} className="w-full">
            <Text className="text-base font-medium text-gray-700 mb-1">{title}</Text>
            <TextInput
              className="w-full h-12 bg-gray-200 rounded-lg px-3 text-gray-800 shadow-sm"
              placeholder={`Nhập ${title.toLowerCase()}`}
              value={details[title.toLowerCase()]}
              onChangeText={(text) =>
                setDetails({ ...details, [title.toLowerCase()]: text })
              }
            />
          </View>
        ))}
      </View>

      {/* Date Picker */}
      <View className="flex flex-row items-center justify-between bg-white shadow-sm rounded-lg p-4 mt-6">
        <Text className="text-base font-medium text-gray-700">Ngày sinh</Text>
        <Text className="text-base text-gray-600">{formattedDob}</Text>
        <TouchableOpacity onPress={handleShowDatePicker}>
          <Icon name="calendar" type="feather" size={24} color="#4A90E2" />
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            value={details.dob}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
      </View>

      {/* Update Button */}
      <View className="absolute bottom-6 w-full flex items-center">
        <Button title="Cập nhật hồ sơ" width="75%" height={40} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}
