import { View, Text, ImageBackground,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../../../type';

const Accepted = () => {

	const nav = useNavigation<HomeScreenNavigationProp>();


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
                            onPress={() => {
									nav.navigate("Orders")
							}}
                    >
                            <Text className="text-white">Theo dõi đơn hàng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            className="h-[67px] w-[360px] flex items-center justify-center"
                            onPress={() => {
									nav.navigate("BottomTabNavigator")
							}}
                    >
                            <Text className="">Quay lại trang chủ</Text>
                    </TouchableOpacity>
            </View>
    </ImageBackground>
)
}

export default Accepted