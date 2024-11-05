import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LocationRegister from "./src/screens/LocationRegister/LocationRegister";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./src/screens/Home";
import Cart from "./src/screens/Cart";
import Favorite from "./src/screens/Favorite";
import Explore from "./src/screens/Explore";


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
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator>
         
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Favorite" component={Favorite} />
          <Tab.Screen name="Profile" component={LocationRegister} />
        </Tab.Navigator>

      </SafeAreaProvider>
    </NavigationContainer>
  );
}
