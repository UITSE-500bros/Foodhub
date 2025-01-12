import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import { useFavoriteStore } from "./FavoriteStore";
import useCartStore from "../Cart/store/CartStore";
import Toast from "react-native-toast-message";
const data = [1, 2, 3, 4, 5, 6, 7, 8];
const Favorite = () => {
  const favoriteItems = useFavoriteStore((state) => state.favoriteProducts);
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddAllToCart = () => {
    favoriteItems.forEach((item) => {
      addToCart(item);
    });
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "All items added to cart",
 
    });
  };

  return (
    <View className="flex flex-1">
      {/* Header */}
      <View className="flex justify-center items-center mt-10">
        <Text className="text-center text-[#181725] text-xl font-black font-['Inter']">
          Favorite
        </Text>
      </View>

      {/* FlatList */}
      {favoriteItems.length > 0 && (
        <FlatList
          style={{
            position: "relative",
            flexGrow: 1,
          }}
          contentContainerStyle={{ paddingBottom: 80, paddingVertical: 20 }} // Add padding to avoid button overlap
          data={favoriteItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="m-1 ">
              <View className="h-[1px] bg-[#E5E5E5]" />
              <ProductCard isFavorite={true} product={item} adjust={false} />
            </View>
          )}
        />
      )}

      {/* Sticky TouchableOpacity Button */}
      <TouchableOpacity
        className="absolute h-[67px] bottom-5 flex items-center justify-center left-6 right-6 bg-[#53B175] rounded-2xl"
        onPress={() => handleAddAllToCart()}
      >
        <Text className="text-white text-center text-xl font-bold">
          Add all to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Favorite;
