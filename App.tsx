
import React from 'react';
import { View } from 'react-native';
import Button from './src/components/Button';
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Button title='Press me' onPress={() => console.log('Button pressed')} width={1000} height={50} />
    </View>
  );
}
