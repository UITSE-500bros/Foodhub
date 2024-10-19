import React from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";

import Home from "./src/screens/Home";


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
     <Home />
    </View>
  );
}
