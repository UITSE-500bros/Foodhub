import { View, Text } from "react-native";
import React from "react";
import AdjustButton from "../Button/AdjustButton";

type Props = {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
};
export default function ButtonGroup({quantity,onQuantityChange}:Props) {
  const handlePlus = () => {
    onQuantityChange(quantity + 1);
  };
  const handleMinus = () => {
    if (quantity === 1) return;
    onQuantityChange(quantity - 1);
  };

  return (
    <View className="flex flex-row items-center justify-center">
      <AdjustButton type="minus" onPress={handleMinus} size={20} />
      <Text className=" font-bold text-center px-5 justify-center items-center ">
        {quantity}
      </Text>
      <AdjustButton type="plus" onPress={handlePlus} size={20} />
    </View>
  );
}
