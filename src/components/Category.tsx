import { Text, View,Image,StyleSheet } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View className='rounded-2xl bg-yellow-300 border border-solid border-rose-500 flex justify-center items-center gap-2 px-7 py-3 w-44 h-48' >
        <Image source={require('../../assets/oil.png')} />
        <Text className='text-center text-xs font-semibold'>Thịt cá trứng, hải sản</Text>
    </View>
  )
}

export default Category