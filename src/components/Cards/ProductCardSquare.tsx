import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../../type"; // Adjust the import path as necessary
import Product from "../../models/Product"; // Adjust the import path as necessary
import AdjustButton from "../Button/AdjustButton";
import { formattedPrice } from "../../utils/formattesPrice";
import useCartStore from "../../screens/Cart/store/CartStore";

type ProductCardSquareProps = {
  product: Product;
};

const ProductCardSquare = ({ product }: ProductCardSquareProps) => {
  const nav = useNavigation<HomeScreenNavigationProp>();

  // Format the price as a currency value
  const addToCart = useCartStore((state)=>state.addToCart)



  return (
    <TouchableOpacity
      className="flex w-[173px] h-[250px] flex-col justify-center items-center border rounded-2xl m-2"
      onPress={() =>
        nav.navigate("ProductDetail", {
          id: product.id,
        })
      }
    >
      <Image
        source={{ uri: product.product_image }}
        className="w-[100px] h-[80px] rounded-lg resize-stretch mb-2 mt-6 mx-2"
      />
      <Text className="text-black text-base font-black h-[50] mx-4 ">
        {product.product_name}
      </Text>
      <Text className="text-[#7C7C7C] text-sm font-[900]">7 pieces</Text>
      <View className="flex flex-row justify-between items-center mt-5 mb-2 w-full px-4">
        <Text className="text-black text-lg font-semibold tracking-tighter">
          {formattedPrice(product.product_price)}
        </Text>
        <AdjustButton type="plus" onPress={() => addToCart({ ...product, product_detail: "", quantity: 1 })} size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardSquare;
