import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "@rneui/base";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp, RootStackParamList } from "../../../type";
import useLocationStore from "../LocationRegister/Store/LocationStore";

export default function AddressSelect() {
  const [checked, setChecked] = React.useState(0);
  const [selectedLocation, setSelectedLocation] = React.useState({
    address: "",
    address_name: "",
  });
  const nav = useNavigation<ProfileScreenNavigationProp>();
  const { locations, addLocation } = useLocationStore();

  return (
    <SafeAreaView className="flex flex-col items-center p-5 bg-[#f9f9f9] h-full">
      {Array.isArray(locations) &&
        locations.map((item, index) => (
          <View
            key={index}
            className="flex flex-row items-center justify-between p-5"
          >
            <Icon name="map-pin" size={24} type="feather" color="#D2691E" />
            <View className="flex flex-col ml-3 flex-1">
              <Text className="text-base font-semibold ">
                {item.address_name}
              </Text>
              <Text className="text-">{item.address}</Text>
            </View>
            <RadioButton
              value={index + ""}
              status={checked === index ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(index);
                setSelectedLocation({
                  address: item.address,
                  address_name: item.address_name,
                });
              }}
            />
          </View>
        ))}
      <TouchableOpacity
        onPress={() => nav.navigate("LocationRegister")}
        className="flex rounded-md border w-full border-gray-400 flex-row items-center justify-center p-5"
      >
        <Icon name="plus" size={24} type="feather" color="#D2691E" />
        <Text className="text-base font-semibold ">Thêm địa chỉ mới</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-[#D2691E] absolute  bottom-3 z-10  w-full h-12 rounded-lg mt-5 flex items-center justify-center">
        <Text className="text-white font-bold text-base">Chọn địa chỉ</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
