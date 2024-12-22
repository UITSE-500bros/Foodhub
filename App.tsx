import { NavigationContainer } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStack from "./src/navigation/RootStack";
import '../Foodhub/src/utils/configureLogger.ts';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  

  return (
    // !userInfo ?
    // <Login promptAsync={promptAsync}/>
    // : (
      <GestureHandlerRootView>
        <NavigationContainer>
          <SafeAreaProvider>
            <RootStack />
          </SafeAreaProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
  );
}
