
import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  width?: number;
  height?: number;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, width, height }) => {
  return (
    <TouchableOpacity style={[{ width, height},styles.button]} onPress={onPress}>
      <Text className=" text-white font-normal ">{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#53B175',
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
    },
    });
export default Button;
