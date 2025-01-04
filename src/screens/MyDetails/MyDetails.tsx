import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from '@react-native-community/datetimepicker';
export default function MyDetails() {
  const titles = ["Họ và tên", "Số điện thoại", "Email"];
  const [details,setDetails]=useState({
    name:"",
    phone:"",
    email:"",
    dob: new Date()
  })
  return (
    <SafeAreaView className="p-5 flex flex-1 gap-2  items-center">
      {titles.map((title) => (
        <View key={title} className="flex  w-full  ">
          <Text>{title}</Text>
          <TextInput className="w-full rounded-md shadow-md bg-slate-200" />
        </View>
      ))}

      <View className="flex  w-full  ">
        <Text>Ngày sinh</Text>
        <DateTimePicker
        value={new Date(details.dob)}
        mode="date"
        is24Hour={true}

        />

          </View>
    </SafeAreaView>
  );
}
