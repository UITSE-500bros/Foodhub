import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import Home from "./src/screens/Home";
import Explore from "./src/screens/Explore";

const loadFonts = async () => {
  await Font.loadAsync({
    Inter: require("./assets/fonts/Inter-VariableFont_opsz,wght.ttf")
  })
};


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View className="flex-1 items-center justify-center bg-white">
     <Explore />
    </View>
  );
}
