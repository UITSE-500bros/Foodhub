import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

type ItemProps = {
    title: string;
    };
const Item = ({title}:ItemProps) => {
  const [selected, setSelected] = useState(false);
  const handleOnPress = () => {
    setSelected(!selected);
    console.log(selected);
    
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: selected ? "#53B175" : "transparent",
      }}
      onPress={handleOnPress}
      className=" border p-1 rounded-xl flex items-center justify-center border-primary "
    >
      <Text style={{
        color: selected ? "#fff" : "#000",
      }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({});
