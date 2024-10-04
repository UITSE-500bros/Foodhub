import { Button } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Button title="Solid" />
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="clear" />
    </View>
  );
}
