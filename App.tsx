
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import React from 'react';
import Search from './src/screens/Search';
import { Productdetail } from './src/components';
import Favorite from './src/screens/Favorite';
import { View } from 'react-native';

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
    <View >
      {/* <Favorite /> */}
      {/* <Search /> */}
      <Productdetail />
    </View >
  );
}
