import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Icon } from '@rneui/themed';

const Checkout = () => {
    return (
        <View className='flex flex-1 px-1 pt-3'>
            <View className='flex flex-row justify-between items-center'>
                <Text className='text-2xl font-bold'>Checkout</Text>
                <Icon name='close' />
            </View>
            <View className='w-full h-[2px] bg-[#E2E2E2] mb-[20px]' />
            {/* Body */}
            <View className='flex flex-col px-[5px] gap-[20px]'>
                {/* Delivery */}
                <View className='flex flex-row justify-between items-center'>
                    <Text className='text-[#7C7C7C] font-[Inter] text-lg font-semibold'>Delivery</Text>
                    <View className='flex flex-row gap-[2px] items-center'>
                        <Text className='text-base font-semibold'>Select method</Text>
                        <Icon name='chevron-small-right' type='entypo' />
                    </View>
                </View>
                <View className='w-full h-[2px] bg-[#E2E2E2]' />
                {/* Payment */}
                <View className='flex flex-row justify-between items-center'>
                    <Text className='text-[#7C7C7C] font-[Inter] text-lg font-semibold'>Payment</Text>
                    <View className='flex flex-row gap-[2px] items-center'>
                        <Text className='text-base font-semibold'>Select method</Text>
                        <Icon name='chevron-small-right' type='entypo' />
                    </View>
                </View>
                <View className='w-full h-[2px] bg-[#E2E2E2]' />
                {/* Promo code */}
                <View className='flex flex-row justify-between items-center'>
                    <Text className='text-[#7C7C7C] font-[Inter] text-lg font-semibold'>Promo code</Text>
                    <View className='flex flex-row gap-[2px] items-center'>
                        <Text className='text-base font-semibold'>Pick discount</Text>
                        <Icon name='chevron-small-right' type='entypo' />
                    </View>
                </View>
                <View className='w-full h-[2px] bg-[#E2E2E2]' />
                {/* Total cost */}
                <View className='flex flex-row justify-between items-center'>
                    <Text className='text-[#7C7C7C] font-[Inter] text-lg font-semibold'>Total cost</Text>
                    <Text className='text-base font-semibold mr-2'>21.000Đ</Text>
                </View>
            </View>
            <Text>
                By placing an order, you agree to our
                <Text className='font-bold'> Terms</Text> And <Text className='font-bold'>Conditions</Text>
            </Text>
            <TouchableOpacity
                className="h-[67px] w-[360px] mx-6 flex items-center justify-center bg-[#53B175] rounded-2xl"
                onPress={() => console.log("Add to Cart")}
            >
                <Text className="text-white">Place Order</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Checkout