

import { View, Text, Image } from "react-native";
import React from "react";
import Product from "../../models/Product";

type OrderDetailProps = {
  products: Product[];
};

export default function OrderDetail({ products }: OrderDetailProps) {
  return (
    <View>
      {products.map((item) => (
        <View key={item.id} className="flex flex-row items-center mb-4">
          <Image
            source={{ uri: item.product_image }}
            className="w-20 h-20 rounded-lg resize-stretch mr-4"
          />
          <View className="flex-1">
            <Text className="text-base font-bold text-gray-800 mb-1">
              {item.product_name}
            </Text>
            <Text className="text-sm text-gray-500">Giá: {item.product_price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}