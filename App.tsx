import { NavigationContainer } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStack from "./src/navigation/RootStack";
import * as Linking from 'expo-linking';
import './logger.config'
import Toast from 'react-native-toast-message';


WebBrowser.maybeCompleteAuthSession();

const prefix = Linking.createURL('');

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
          <Toast  />
        </NavigationContainer>
      </GestureHandlerRootView>
  );
}
