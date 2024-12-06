import {
  View,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { Button } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { LocationRegisterScreenNavigationProp } from "../../../type";

const LocationRegister = () => {
  const nav= useNavigation<LocationRegisterScreenNavigationProp>();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex flex-col gap-4">
        <View className="w-full h-[170px] justify-center items-center">
          <Image
            source={require("../../../public/images/location.png")}
            className="w-[224px] h-[170px]"
          />
        </View>
        <Text className="text-center text-black text-2xl font-semibold">
          Select Your Location
        </Text>
        <Text className="text-center text-[#7c7c7c] text-base font-black font-['Inter']">
          Switch on your location to stay in tune with what’s happening in your
          area
        </Text>

        <View className="mx-4">
          <Text className="ml-5">Tỉnh/Thành phố</Text>
          <TextInput
            style={{ backgroundColor: "white", marginHorizontal: 10 }}
          />
        </View>
        <View className="mx-4">
          <Text className="ml-5">Quận/Huyện</Text>
          <TextInput
            style={{ backgroundColor: "white", marginHorizontal: 10 }}
          />
        </View>
        <View className="mx-4">
          <Text className="ml-5">Xã/Phường</Text>
          <TextInput
            style={{ backgroundColor: "white", marginHorizontal: 10 }}
          />
        </View>
        <View className="mx-4">
          <Text className="ml-5">Số nhà,tên đường</Text>
          <TextInput
            style={{ backgroundColor: "white", marginHorizontal: 10 }}
          />
        </View>
        <View className="w-full flex justify-center items-center mt-12 " >
          <Button
            title="Save"
            onPress={() => nav.navigate("BottomTabNavigator")}
            width={364}
            height={48}
            
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LocationRegister;
