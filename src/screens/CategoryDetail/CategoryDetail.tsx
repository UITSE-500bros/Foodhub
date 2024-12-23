import { View, Text, FlatList } from "react-native";
import React from "react";
import { ProductCardSquare } from "../../components";
import { Icon, IconButton } from "react-native-paper";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const product = {
  id: "1",
  created_at: "2023-01-01T00:00:00Z",
  updated_at: "2023-01-01T00:00:00Z",
  product_name: "Sample Product",
  product_price: 29.99,
  category_id: "123",
  is_sale: true,
  percentage_sale: 20,
  product_image: "https://example.com/product-image.jpg",
  brand: "Sample Brand"
};
const CategoryDetail = () => {
  return (
    <View>
      

      
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View className=" m-3">
            <ProductCardSquare product={product} />
          </View>
        )}
      />
    </View>
  );
};

export default CategoryDetail;
