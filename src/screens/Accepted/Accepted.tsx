import { View, Text, ImageBackground,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Accepted = () => {
return (
    <ImageBackground source={require('../../../assets/bg-checkout.png')} className='w-full h-full flex flex-1 items-center justify-evenly'>
            <Image source={require('../../../assets/success.png')} style={{width: 250, height: 250, marginTop: 50}} />
            <View className='flex items-center justify-center '>
                    <Text className='text-2xl font-semibold'>Đơn hàng của bạn đã được chấp nhận</Text>
                    <Text className='text-base font-black text-[#7C7C7C] text-center'>Các mặt hàng của bạn đã được đặt và đang{"\n"} trên đường xử lý</Text>
            </View>
            <View className='flex items-center '>
                    <TouchableOpacity
                            className="h-[67px] w-[360px] flex items-center justify-center bg-[#53B175] rounded-2xl"
                            onPress={() => console.log("Theo dõi đơn hàng")}
                    >
                            <Text className="text-white">Theo dõi đơn hàng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            className="h-[67px] w-[360px] flex items-center justify-center"
                            onPress={() => console.log("Quay lại trang chủ")}
                    >
                            <Text className="">Quay lại trang chủ</Text>
                    </TouchableOpacity>
            </View>
    </ImageBackground>
)
}

export default Accepted