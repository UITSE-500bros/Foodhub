import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Button, Searchbar } from "react-native-paper";
import ProductCarousel from "../../components/Carousels/ProductCarousel";

import Icon from "react-native-vector-icons/MaterialIcons";
import ImageCarousel from "../../components/Carousels/ImageCarousel";

const Home = () => {
  return (
    <ScrollView className="flex flex-col w-full mt-8">
      <View className="items-center mt-7 ">
        <Image
          source={require("../../../assets/logo.png")}
          className="w-[30px] h-[30px] "
        />
        <View className="flex flex-row items-center justify-center m-3 ">
          <Icon name="location-on" size={15} color="#181725" />
          <Text  className="  text-[#4C4F4D] text-center text-lg font-semibold font-inter">
            Linh Trung, Thủ Đức
          </Text>
        </View>
      </View>

      {/* search bar */}
      <View className="w-full h-[52px] px-4 bg-white">
        <Searchbar
          placeholder="Search Store"
          value=""
          onChangeText={() => {}}
          style={{
            borderRadius: 15,
            backgroundColor: "#F9F9F9",
            width: "100%",
          }}
        />
      </View>
      {/* image carousel */}
      <View className="flex m-4 flex-grow h-[115]">
        <ImageCarousel />
      </View>

      {/* product cards */}
      <View className="w-full  mt-4">
        <ProductCarousel title="Exclusive Offer" />
        <ProductCarousel title="Best Sellers" />
        <ProductCarousel title="New Arrivals" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#53B175",
  },
});

export default Home;
