import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductCard } from "../../components";
import { usersService } from "../../service";
import { useNavigation } from "@react-navigation/native";
import { VNpayScreenNavigationProp } from "../../../type";

const data = Array.from({ length: 20 }, (_, i) => i + 1);

const Cart = () => {
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height

  const nav = useNavigation<VNpayScreenNavigationProp>();

  const handlePayment = async () => {
    try {
      const url = await usersService.checkout(50000);
      
      if (url) {
        nav.navigate("VNpay", { uri: url });
      }
    } catch (error) {
      console.error("Error presenting payment sheet:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex justify-center items-center mt-10">
        <Text className="text-center text-[#181725] text-xl font-black">
          My Cart
        </Text>
      </View>
      <FlatList
        data={data}
        style={{ width: width, height: height - 200 }}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <View className="m-1">
            <View className="h-[1px] bg-[#E5E5E5]" />
            <ProductCard adjust />
          </View>
        )}
      />
      <TouchableOpacity
        className={`absolute h-[67px] bottom-0 flex items-center justify-center left-6 right-6 bg-[#53B175] rounded-2xl`}
        onPress={handlePayment}
      >
        <Text className="text-white">Check out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;