
import React from 'react';
import { View } from 'react-native';
import ProductCard from './src/components/ProductCard';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

import Home from './src/screens/Home';
import Productdetail from './src/components/Productdetail';
export default function App() {
  // let [fontLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_500Medium,
  //   Inter_600SemiBold,
  //   Inter_700Bold,
  // });

  // if(!fontLoaded) {
  //   return null;
  // }

  return (
    <View >
      <Productdetail />
    </View>
  );
}
