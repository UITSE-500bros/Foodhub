import { View, Text, Image } from "react-native";
import React from "react";
import AdjustButton from "../Button/AdjustButton";

const ProductCardSquare = () => {
  return (
    <View className="flex w-[173] h-[250] flex-col justify-center items-center border rounded-2xl">
      <Image
        source={{
          uri: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg",
        }}
        className="w-[100px] h-[80px] rounded-lg resize-stretch mb-[10] mt-[25px] mx-8"
      />
      <Text className=" text-black text-base font-black tracking-tight mx-[15px] ">
        Organic Banana
      </Text>
      <Text className=" text-[#7C7C7C] text-sm font-[900]  ">
        7 pieces, Price
      </Text>
      <View className=" items-center flex justify-around flex-row mt-7">
        <Text className=" mr-14 text-black text-lg font-semibold tracking-tighter">
          $4.99
        </Text>
        <AdjustButton
          type="plus"
          onPress={() => console.log("plus")}
          size={30}
        />
      </View>
    </View>
  );
};

export default ProductCardSquare;
