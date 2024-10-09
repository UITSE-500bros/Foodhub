
import React from 'react';
import { View } from 'react-native';
import ProductCard from './src/components/ProductCard';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
  let [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if(!fontLoaded) {
    return null;
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ProductCard />
    </View>
  );
}
