import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { getProductBySearchQueryApi } from "../../screens/Home/services/Home.service";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCardSquare from "../Cards/ProductCardSquare";
import Product from "../../models/Product";
type SearchBarProps = {
  searchQuery: string;
  onChangeSearch: (query: string) => void;
  onSearchSubmit: () => void;
};

export default function SearchBar({
  searchQuery,
  onChangeSearch,
  onSearchSubmit,
}: SearchBarProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchProduct, setSearchProduct] = React.useState<Product[]>([]);

  const handleSeacrhSubmit = async () => {
    setIsLoading(true);
    await onSearchSubmit();
    setIsLoading(false);
  };

  return (
    <SafeAreaView className="w-full h-[52px] px-4 bg-transparent ">
      <Searchbar
        placeholder="Tìm kiếm sản phẩm"
        value={searchQuery}
        onChangeText={onChangeSearch}
        onSubmitEditing={handleSeacrhSubmit}
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
