import { View, Text, ImageBackground,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Checkout = () => {
  return (
    <ImageBackground source={require('../../assets/bg-checkout.png')} className='w-full h-full flex flex-1 items-center justify-evenly'>
        <Image source={require('../../assets/success.png')} style={{width: 250, height: 250, marginTop: 50}} />
        <View className='flex items-center justify-center '>
            <Text className='text-2xl font-semibold'>Your Order has been accepted</Text>
            <Text className='text-base font-black text-[#7C7C7C] text-center'>Your items has been placed and is on{"\n"} it’s way to being processed</Text>
        </View>
        <View className='flex items-center '>
            <TouchableOpacity
                className="h-[67px] w-[360px] flex items-center justify-center bg-[#53B175] rounded-2xl"
                onPress={() => console.log("Add to Cart")}
            >
                <Text className="text-white">Track order</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="h-[67px] w-[360px] flex items-center justify-center"
                onPress={() => console.log("Add to Cart")}
            >
                <Text className="">Back to home</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

export default Checkout