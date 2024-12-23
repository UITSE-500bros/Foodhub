import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductCardSquare } from "../../components";
import { Icon, IconButton } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import Product from "../../models/Product";
import { getProductsByIDApi } from "./service/CategoryDetail.service";



const CategoryDetail = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const route = useRoute();
  const { id } = route.params;
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsByIDApi(id);
      setProducts(products);
    };
    fetchProducts();
  }, []);
  

  return (
    <View className="flex justify-center items-center">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
         
            <ProductCardSquare product={item} />
         
        )}
      />
    </View>
  );
};

export default CategoryDetail;
