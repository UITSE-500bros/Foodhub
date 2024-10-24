import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { Button, ProductCard } from "../components";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Checkout from "../utils";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Cart = () => {
    return (
        <GestureHandlerRootView>
            <BottomSheetModalProvider>
                <View className=" relative">
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
                    <View className="justify-center items-center my-5">
                        <Button
                            title="Go to Checkout"
                            onPress={() => console.log("Checkout")}
                            width={width - 40}
                            height={60}
                        />
                    </View>
                </View>
                <BottomSheetModal
                    ref={filterBottomSheetModal}
                    index={1}
                    snapPoints={snapPoints} // Adjust the height as needed
                    onDismiss={onClose}
                >
                    <BottomSheetView >
                        <Checkout />
                    </BottomSheetView>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default Cart;
