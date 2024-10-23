import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { Button, ProductCard } from "../components";

const data = [1, 2, 3, 4, 5, 6];
const width = Dimensions.get("window").width;

const Cart = () => {
  return (
    <View>
      <View className=" flex justify-center items-center mt-10">
        <Text className="text-center text-[#181725] text-xl font-black font-['Inter'] ">
          My Cart
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <View className=" m-1">
            <View className=" h-[1px] bg-[#E5E5E5]"></View>
            <ProductCard adjust={true} />
          </View>
        )}
      />
      <View className=" justify-center items-center">
       <Button
        title="Go to Checkout"
        onPress={() => console.log("Checkout")}
        width={width - 40}
        height={60}
        
       />
      </View>
    </View>
  );
};

export default Cart;
