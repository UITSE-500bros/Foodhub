import { View, Text, Image } from "react-native";
import React from "react";
import AdjustButton from "./AdjustButton";

interface ProductCardProps {
  adjust: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ adjust }) => {
  return (
    <View className="flex h-[100] flex-row justify-center items-center mx-2 mb-[25]">
      <Image
        source={{ uri: "https://picsum.photos/70" }}
        className=" w-[80px] h-[80px] rounded-lg resize-stretch mr-[33]"
      />
      <View className=" py-1 mr-4">
        <Text className=" text-base mb-1 font-extrabold text-[#181725] ">
          Product name
        </Text>
        <Text className=" text-[#7C7C7C] text-sm mb-3">
          Unit of measurement
        </Text>
        {
          adjust && (
            <View className="flex flex-row items-center justify-center">
              <AdjustButton
                type="minus"
                onPress={() => console.log("minus")}
                size={20}
              />
              <Text className=" font-bold text-center px-5 justify-center items-center ">
                1
              </Text>
              <AdjustButton
                type="plus"
                onPress={() => console.log("plus")}
                size={20}
              />
            </View>
          )
        }
      </View>

      <View className=" w-[90px] ml-7 mr-3  items-end">
        <Text className=" mb-[57] mx-2 ">X</Text>
        <Text
          className=" text-[#181725] text-center items-center 
        text-base flex font-bold flex-grow "        >
          10000000
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
