import { View, Text, FlatList, Dimensions, TouchableOpacity } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { Button, ProductCard } from "../../components";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from "@gorhom/bottom-sheet";
import { Icon } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Cart = () => {
    const CheckoutModal = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['55%'], []);

    const handleFilterPress = useCallback(() => {
        CheckoutModal.current?.present();
    }, []);

    return (
        <GestureHandlerRootView>
            
            <BottomSheetModalProvider>
                <SafeAreaView className=" relative">
                    <View className=" flex justify-center items-center mt-10">
                        <Text className="text-center text-[#181725] text-xl font-black font-['Inter'] ">
                            My Cart
                        </Text>
                    </View>
                    <FlatList
                        data={data}
                        style={{ width: width, height: height - 200 }}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <View className=" m-1">
                                <View className=" h-[1px] bg-[#E5E5E5]"></View>
                                <ProductCard adjust={true} />
                            </View>
                        )}
                    />
                    <View className="justify-center items-center fixed bottom-0 my-5">
                        <Button
                            title="Go to Checkout"
                            onPress={handleFilterPress}
                            width={width - 40}
                            height={60}
                        />
                    </View>
                </SafeAreaView>
                <BottomSheetModal
                    ref={CheckoutModal}
                    index={1}
                    snapPoints={snapPoints}> 
                    <BottomSheetView >
                        <View className='flex px-1 pt-3 mt-5 gap-y-3 '>
                            <View className='flex flex-row justify-between items-center'>
                                <Text className='text-2xl font-bold'>Checkout</Text>
                                <Icon name='close' onPress={()=> {}}/>
                            </View>
                            <View className='w-full h-[2px] bg-[#E2E2E2]' />
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
                            <Text>By placing an order, you agree to our <Text className='font-bold'> Terms</Text> And <Text className='font-bold'>Conditions</Text>
                            </Text>
                            <TouchableOpacity
                                className="h-[67px] w-[360px] mx-6 flex items-center justify-center bg-[#53B175] rounded-2xl"
                                onPress={() => console.log("Add to Cart")}
                            >
                                <Text className="text-white">Place Order</Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheetView>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default Cart;
