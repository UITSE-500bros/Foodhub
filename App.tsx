
import React from 'react';
import { View } from 'react-native';
import Button from './src/components/Button';
import { Icon } from '@rneui/base';
import AdjustButton from './src/components/AdjustButton';
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Button title='Press me' onPress={() => console.log('Button pressed')} width={1000} height={50} />
        <AdjustButton type='minus' onPress={()=>console.log('pressed')} />
    </View>
  );
}
