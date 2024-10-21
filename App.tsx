
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Search from './src/screens/Search';
import { Productdetail } from './src/components';
import Favorite from './src/screens/Favorite';

export default function App() {
  let [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView >
      {/* <Favorite /> */}
      {/* <Search /> */}
      <Productdetail />
    </GestureHandlerRootView >
  );
}
