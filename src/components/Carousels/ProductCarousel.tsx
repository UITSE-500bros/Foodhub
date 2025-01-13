import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

import ProductCardSquare from "../Cards/ProductCardSquare";
import Product from "../../models/Product";
import { Skeleton } from "@rneui/themed";

type ProductCarouselProps = {
  title: string;
  products: Product[];
};

const ProductCarousel = ({ title, products }: ProductCarouselProps) => {
  return (
    <View className="w-full px-4">
      <View className="flex flex-row items-center justify-between w-full">
        <Text className=" text-[#181725] text-2xl font-semibold ">{title}</Text>

      </View>
      {products.length > 0 ? (

        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View className=" m-2">
              <ProductCardSquare product={item} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      ) : (
        <View className="flex flex-row justify-center items-center gap-2 ">
          <Skeleton width={173} height={250} />
          <Skeleton width={173} height={250} />

        </View>
      )}



    </View>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  buttonText: {
    color: "#53B175",
    fontSize: 16,
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: 24,
  },
});
