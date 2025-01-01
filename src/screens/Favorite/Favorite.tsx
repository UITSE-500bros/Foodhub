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
const data = [1, 2, 3, 4, 5, 6, 7, 8];
const Favorite = () => {
  const favoriteItems = useFavoriteStore((state) => state.favoriteProducts);

  return (
    <View className="relative flex-1">
      {/* Header */}
      <View className="flex justify-center items-center mt-10">
        <Text className="text-center text-[#181725] text-xl font-black font-['Inter']">
          Favorite
        </Text>
      </View>

      {/* Divider */}
      <View className="h-[1px] w-full bg-[#E2E2E2]" />

      {/* FlatList */}
      {favoriteItems.length > 0 && (
        <FlatList
          style={{
            position: "relative",
            flexGrow: 1,
          }}
          contentContainerStyle={{ paddingBottom: 80 }} // Add padding to avoid button overlap
          data={favoriteItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="m-1">
              <View className="h-[1px] bg-[#E5E5E5]" />
              <ProductCard product={item} adjust={false} />
            </View>
          )}
        />
      )}

      {/* Sticky TouchableOpacity Button */}
      <TouchableOpacity
        className="absolute h-[67px] bottom-5 flex items-center justify-center left-6 right-6 bg-[#53B175] rounded-2xl"
        onPress={() => console.log("Add to Cart")}
      >
        <Text className="text-white text-center text-xl font-bold">
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Favorite;
