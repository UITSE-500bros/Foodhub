import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { getProductBySearchQueryApi } from "../../screens/Home/services/Home.service";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCardSquare from "../Cards/ProductCardSquare";
import Product from "../../models/Product";

export default function SearchBar() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchProduct, setSearchProduct] = React.useState<Product[]>([]);
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onSeacrhSubmit = async () => {
    setIsLoading(true);
    getProductBySearchQueryApi(searchQuery).then((res) => {
      setSearchProduct(res);
      if (res.length === 0) {
        alert("No product found");
      }
      setIsLoading(false);
    });
  };

 
  return (
    <SafeAreaView className="w-full h-[52px] px-4 bg-transparent ">
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
      {isLoading && (
        <View className="flex justify-center items-center">
          <ActivityIndicator animating={true} color="#000" />
        </View>
      )}
      {searchProduct.length > 0 &&
        searchProduct.map((product) => {
          return <ProductCardSquare key={product.id} product={product} />;
        })}
    </SafeAreaView>
  );
}
