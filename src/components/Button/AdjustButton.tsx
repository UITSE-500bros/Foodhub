import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "@rneui/themed";
import { styled } from "nativewind";

type AdjustButtonProps = {
    onPress: () => void;
    type: "plus" | "minus";
    size: number;
    };


const AdjustButton = ({onPress,type,size}:AdjustButtonProps) => {
  return (
    <TouchableOpacity className="border-2 border-[#E2E2E2] rounded-full p-1 justify-center items-center"
        onPress={onPress}    
    >
      <Icon name={type} type="antdesign" size={size} color="#53B175" />
    </TouchableOpacity>
  );
};

export default styled(AdjustButton);
