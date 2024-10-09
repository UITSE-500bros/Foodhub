import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "@rneui/themed";
import { styled } from "nativewind";

type AdjustButtonProps = {
    onPress: () => void;
    type: "plus" | "minus";
    };


const AdjustButton = ({onPress,type}:AdjustButtonProps) => {
  return (
    <TouchableOpacity className="border-2 border-[#E2E2E2] rounded-full p-1 justify-center items-center"
        onPress={() => console.log("Button pressed")}    
    >
      <Icon name={type} type="antdesign" size={30} color="#53B175" />
    </TouchableOpacity>
  );
};

export default styled(AdjustButton);
