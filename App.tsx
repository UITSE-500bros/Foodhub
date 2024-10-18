
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import React from 'react';
import { View } from 'react-native';
import Home from './src/screens/Home';
import Favorite from './src/screens/Favorite';
import ImageCarousel from './src/components/Carousels/ImageCarousel';
import Search from './src/screens/Search';

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
    <View className="">
      {/* <Favorite /> */}
      <Search />
    </View>
  );
}
