import React, {useEffect, useState} from "react";
import * as Font from "expo-font";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ProductDetail,Home,Explore,CategoryDetail,Favorite,Cart,Search } from "./src/screens"
import { Category } from "./src/components";
import NumberVerification from "./src/screens/NumberVerification";
import PhoneNumber from "./src/screens/NumberVerification";

const loadFonts = async () => {
  await Font.loadAsync({
    Inter: require("./assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PhoneNumber />

    </SafeAreaProvider>
  );
}
