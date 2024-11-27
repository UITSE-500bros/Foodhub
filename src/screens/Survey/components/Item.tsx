import { StyleSheet, Text, View } from "react-native";
import React, { useState, useCallback, memo } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

type ItemProps = {
  title: string;
};

const Item = ({ title }: ItemProps) => {
  const [selected, setSelected] = useState(false);

  const handleOnPress = useCallback(() => {
    setSelected((prevSelected) => !prevSelected);
   
  }, [selected]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: selected ? "#53B175" : "transparent" },
      ]}
      onPress={handleOnPress}
    >
      <Text style={{ color: selected ? "#fff" : "#000" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Item);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#53B175",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});
