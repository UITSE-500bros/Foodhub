import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "../../components";

export default function MyDetails() {
  const titles = ["Họ và tên", "Số điện thoại", "Email"];
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
    const currentDate = selectedDate;
    setShow(false);
    setDetails({ ...details, dob: currentDate });
  };
  const handleShowDatePicker = () => {
    setShow(true);
  };
  return (
    <SafeAreaView className="p-5 flex flex-1 gap-2   items-center">
      {titles.map((title) => (
        <View key={title} className="flex  w-full  ">
          <Text>{title}</Text>
          <TextInput className="w-full rounded-md shadow-md bg-slate-200" />
        </View>
      ))}

      <View className="flex flex-row justify-center  items-center  gap-2  ">
        <Text>Ngày sinh</Text>
        <Text>{formattedDob}</Text>
        <TouchableOpacity onPress={handleShowDatePicker}>
          <Icon name="calendar" type="feather" />
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
      <View className="absolute bottom-5 w-full justify-center items-center">
        <Button title="Save" width="75%" height={40} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}
