import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
const LocationRegister = () => {
  return (
    <SafeAreaView className="flex flex-col gap-4  ">
      <View className="w-full h-[170px]  justify-center items-center">
        <Image
          source={require("../../../public/images/location.png")}
          className="w-[224px] h-[170px]"
        />
      </View>
      <Text className="text-center text-black text-2xl font-semibold ">
        Select Your Location
      </Text>
      <Text className="text-center text-[#7c7c7c] text-base font-black font-['Inter']">
        Swithch on your location to stay in tune with what’s happening in your
        area
      </Text>

      <View>
        <Text>Tỉnh/Thành phố</Text>
        <TextInput></TextInput>
        </View>



    </SafeAreaView>
  );
};

export default LocationRegister;
