import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Button, Searchbar } from "react-native-paper";
import ProductCarousel from "../../components/Carousels/ProductCarousel";

import Icon from "react-native-vector-icons/MaterialIcons";
import ImageCarousel from "../../components/Carousels/ImageCarousel";

import {
  getBannerImagesApi,
  getBestSellerProductsApi,
  getExclusiveOfferProductsApi,
  getNewArrivalProductsApi,
} from "./services/Home.service";
import Banner from "../../models/banner";
import { Skeleton } from '@rneui/themed';

const Home = () => {
  const [products, setProducts] = React.useState({
    exclusiveOffer: [],
    newArrivals: [],
    bestSellers: [],
  });
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onSeacrhSubmit = () => {
    console.log("searching for ", searchQuery);
  }
  useEffect(() => {
    const fetchProducts = async () => {
      const newArrivals = await getNewArrivalProductsApi();
      const bestSellers = await getBestSellerProductsApi();
      const exclusiveOffer = await getExclusiveOfferProductsApi();
      setProducts({ newArrivals, bestSellers, exclusiveOffer });
    };
    fetchProducts();
  }, []);

  return (
    <ScrollView className="flex flex-col w-full mt-8">
      <View className="items-center mt-7 ">
        <Image
          source={require("../../../assets/logo.png")}
          className="w-[30px] h-[30px] "
        />
        <View className="flex flex-row items-center justify-center m-3 ">
          <Icon name="location-on" size={15} color="#181725" />
          <Text className="  text-[#4C4F4D] text-center text-lg font-semibold ">
            Linh Trung, Thủ Đức
          </Text>
        </View>
      </View>

      {/* search bar */}
      <View className="w-full h-[52px] px-4 bg-transparent ">
        <Searchbar
          placeholder="Search Store"
          value={searchQuery}
          onChangeText={onChangeSearch}
          onSubmitEditing={onSeacrhSubmit}
          style={{
            borderRadius: 15,
            backgroundColor: "#F9F9F9",
            width: "100%",
          }}
        />
      </View>
      {/* image carousel */}

      <ImageCarousel />

      {/* product cards */}
      <View className="w-full  mt-4">
        <ProductCarousel
          products={products.exclusiveOffer}
          title="Exclusive Offer"
        />
        <ProductCarousel products={products.bestSellers} title="Best Sellers" />
        <ProductCarousel products={products.newArrivals} title="New Arrivals" />
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
