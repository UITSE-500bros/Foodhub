import { View, Text, Dimensions } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Indicator() {
  return (
    <View
      style={{
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}
