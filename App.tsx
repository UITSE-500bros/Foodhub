import { NavigationContainer } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStack from "./src/navigation/RootStack";
import * as Linking from 'expo-linking';


WebBrowser.maybeCompleteAuthSession();

const prefix = Linking.createURL('/');
console.log(prefix);
export default function App() {
  const linking={
    prefixes:[prefix],
  }
  

  return (
    // !userInfo ?
    // <Login promptAsync={promptAsync}/>
    // : (
      <GestureHandlerRootView>
        <NavigationContainer linking={linking}>
          <SafeAreaProvider>
            <RootStack />
          </SafeAreaProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
  );
}
