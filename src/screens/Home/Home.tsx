import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/SearchBar";
import ProductCarousel from "../../components/Carousels/ProductCarousel";
import Icon from "react-native-vector-icons/MaterialIcons";
import ImageCarousel from "../../components/Carousels/ImageCarousel";
import {
  getBannerImagesApi,
  getBestSellerProductsApi,
  getExclusiveOfferProductsApi,
  getNewArrivalProductsApi,
  getRecommen,
} from "./services/Home.service";
import { useSearchStore } from "../Search/SearchStore";
import { HomeScreenNavigationProp } from "../../../type";
import { useFavoriteStore } from "../Favorite/FavoriteStore";
import useLocationStore from "../LocationRegister/Store/LocationStore";
import useCartStore from "../Cart/store/CartStore";

const Home = () => {
  const nav = useNavigation<HomeScreenNavigationProp>();

  const { setSearchQuery } = useSearchStore();
  const [products, setProducts] = React.useState({
    exclusiveOffer: [],
    newArrivals: [],
    bestSellers: [],
    recommen: []
  });
  const [searchQuery, setSearchQueryLocal] = React.useState("");
  const navigation = useNavigation();

  const handleSubmit = (query: string) => {
    setSearchQuery(query);
    nav.navigate("Search");
  };
  const onQueryChange = (query: string) => {
    setSearchQueryLocal(query);
  };
  const fetchFavorite = useFavoriteStore((state) => state.fetchFavorite);
  const { locations, fetchLocation } = useLocationStore()
  const location = locations[0]?.address;

  useEffect(() => {
    const fetchProducts = async () => {
      const newArrivals = await getNewArrivalProductsApi();
      const bestSellers = await getBestSellerProductsApi();
      const exclusiveOffer = await getExclusiveOfferProductsApi();
      const recommen = await getRecommen();
      setProducts({ newArrivals, bestSellers, exclusiveOffer, recommen });


    };
    fetchProducts();
    fetchFavorite();
    fetchLocation();
    useCartStore.getState().getCart();
  }, []);

  return (
    <ScrollView className="flex flex-col w-full mt-8">
      <View className="items-center mt-7 ">
        <Image
          source={require("../../../assets/logo.png")}
          className="w-[30px] h-[30px] "
        />
        <View className="flex flex-row items-start justify-center my-3 mx-7 ">
          <Icon name="location-on" size={30} color="#181725" />
          <Text className="  text-[#4C4F4D] text-center text-lg font-semibold ">
            {location === undefined ? "Phường Linh Trung , TP. Dĩ An" : location}
          </Text>
        </View>
      </View>

      {/* search bar */}
      <SearchBar
        searchQuery={searchQuery}
        onSubmit={handleSubmit}
        onChangeSearch={onQueryChange}
        onSearchResults={() => { }}
      />
      {/* image carousel */}
      <ImageCarousel />

      {/* product cards */}
      <View className="w-full  mt-4">
        <ProductCarousel products={products.newArrivals} title="Gợi ý hôm nay" />
        <ProductCarousel
          products={products.exclusiveOffer}
          title="Ưu Đãi Độc Quyền"
        />
        <ProductCarousel products={products.bestSellers} title="Bán Chạy Nhất" />
        <ProductCarousel products={products.newArrivals} title="Hàng Mới Về" />
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
