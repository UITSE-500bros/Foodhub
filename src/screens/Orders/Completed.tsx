import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { data } from "./data";
import { Icon } from "@rneui/base";
import { OrdersProps } from "./Orders";
import OrderDetail from "./OrderDetail";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from "../../../type";

export default function Completed({ orders }: OrdersProps) {
  const nav = useNavigation<ProfileScreenNavigationProp>();
  return (
    <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item }) => (
            <View className="bg-white p-4 rounded-lg mb-4 shadow-md">
              <Text className="text-sm text-gray-500 mb-2">Ngày đặt: {item.created_at}</Text>
              <Text className="text-lg font-bold text-gray-800 mb-4">Trạng thái: {item.transaction_status}</Text>
              <OrderDetail products={item.product_list} />
              <TouchableOpacity  className="mt-4 bg-blue-500 p-2 rounded" onPress={() => {
              }}>
                <Text className="text-white text-center">Đánh giá</Text>
              </TouchableOpacity>
            </View>
          )}
        />
  );
}