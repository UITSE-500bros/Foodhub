import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { data } from "./data";
import { Icon } from "@rneui/base";
import { OrdersProps } from "./Orders";

export default function Completed({ orders }: OrdersProps) {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className=" flex flex-row justify-between  items-center mx-2 mb-[25]">
            <Image
              source={{ uri: item.product_image }}
              className=" w-[80px] h-[80px] rounded-lg resize-stretch mr-[33]"
            />
            <View className="flex justify-start items-start py-1 mr-4">
              <Text className=" overflow-hidden text-start max-w-[165px] text-base mb-1 font-extrabold text-[#181725] ">
                {item.product_name}
              </Text>
              <Text>{item.product_price}</Text>
            </View>
            <TouchableOpacity className=" flex flex-row items-center">
              <Text>Đánh giá</Text>
              <Icon name="chevron-right" size={20} color="#7C7C7C" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
