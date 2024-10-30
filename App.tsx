import React, {useEffect, useState} from "react";
import * as Font from "expo-font";
import {SafeAreaProvider} from "react-native-safe-area-context";

import {LocationRegister} from "./src/screens/LocationRegister";
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
      <LocationRegister/>

    </SafeAreaProvider>
  );
}
