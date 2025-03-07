import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { OrdersProps } from "./Orders";
import OrderDetail from "./OrderDetail";

export default function Active({ orders }: OrdersProps) {
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
        </View>
      )}
    />
  );
}
