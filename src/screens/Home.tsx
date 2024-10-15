import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Button, Searchbar } from "react-native-paper";
import ProductCardSquare from "../components/ProductCardSquare";

const Home = () => {
  return (
    <View className="flex flex-col  items-center">
      <Image
        source={{ uri: "https://picsum.photos/30" }}
        className=" w-[30px] h-[30px] "
      />
      {/* search bar */}
      <View className="w-full h-[52] px-4   bg-white ">
        <Searchbar
          placeholder="Search Store"
          value=""
          onChangeText={() => {}}
          style={{ borderRadius: 15, backgroundColor: "#F9F9F9",width:"100%" }}
        />
      </View>

        {/* product cards */}
      <View className="w-full px-4">
        <View className="flex flex-row items-center justify-between w-full">
          <Text className=" text-[#181725] text-2xl font-semibold ">
            Exclusive Offer
          </Text>
          <Button mode="text" labelStyle={styles.buttonText}>
            See All
          </Button>
        </View>
        <View className="flex flex-row justify-between">
          <ProductCardSquare />
            <ProductCardSquare />
          
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#53B175",
    fontSize:16,
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: 24,
    
    
  },
});

export default Home;
