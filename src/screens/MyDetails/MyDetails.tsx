import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "../../components";
import axiosInstance from "../../service/axiosInstance";

export default function MyDetails() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthday: "", // start with empty string or null
  });

  const titles = ["Họ và tên", "Số điện thoại", "Email"];
  const fields = {
    "Họ và tên": "name",
    "Số điện thoại": "phoneNumber",
    "Email": "email",
  };

  const [show, setShow] = useState(false);

  // Check if the birthday is a valid date before formatting it
  const formattedDob =
    user.birthday && !isNaN(new Date(user.birthday).getTime()) // check if it's a valid date
      ? new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }).format(new Date(user.birthday))
      : "Chưa chọn"; // return placeholder text if not a valid date

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || user.birthday;
    setShow(false);
    setUser({ ...user, birthday: currentDate });
  };

  const handleShowDatePicker = () => {
    setShow(true);
  };

  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get("/user/profile");
      console.log(response.data.user);

      setUser(response.data.user);
    } catch (error) {
      console.error("error in fetch user", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Update function to handle form submission
  const updateUserProfile = async () => {
    try {
      const response = await axiosInstance.put("/user/profile", user); // assuming PUT request
      console.log("Profile updated successfully", response.data);
    } catch (error) {
      console.error("Error updating user profile", error);
    }
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
              value={user[fields[title]]} // Access the correct user field based on the title
              onChangeText={(text) =>
                setUser({ ...user, [fields[title]]: text }) // Update the correct user field
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
            value={user.birthday ? new Date(user.birthday) : new Date()} // ensure valid date here
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
      </View>

      {/* Update Button */}
      <View className="absolute bottom-6 w-full flex items-center">
        <Button
          title="Cập nhật hồ sơ"
          width="75%"
          height={40}
          onPress={updateUserProfile} // Now it calls the update function
        />
      </View>
    </SafeAreaView>
  );
}
