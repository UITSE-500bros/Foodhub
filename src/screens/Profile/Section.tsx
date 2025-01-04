import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

type Props = {
  name: string;
  icon: string;
  onPress?: () => void;
};

export default function Section({ name, icon,onPress }: Props) {
  return (
    <>
      <TouchableOpacity  onPress={onPress} className="flex w-full flex-row justify-between items-center h-[70px] ">
        <View className="flex flex-row  items-center">
          <Icon name={icon} type="feather" />
          <Text className="text-[#4C4F4D] text-center text-lg font-semibold   ml-[15px]">
            {name}
          </Text>
        </View>
        <Icon name="chevron-right" type="entypo" />
      </TouchableOpacity>
      <View className="h-[1px] w-full bg-[#E2E2E2]" />
    </>
  );
}
