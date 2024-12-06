import { Icon } from "@rneui/base";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ButtonGroup from "../ButtonGroup";

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
        {adjust && (
          <ButtonGroup/>
        )}
      </View>

      <View className=" w-[90px] ml-7 mr-3    items-end">
        <TouchableOpacity
          onPress={() => console.log("X")}
          className=" mb-[57px]  mx-2 "
        >
          <Icon name="close" size={20} color="#7C7C7C" />
        </TouchableOpacity>
        <Text
          className=" text-[#181725] text-center items-center 
        text-base flex font-bold flex-grow "
        >
          10000000
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
