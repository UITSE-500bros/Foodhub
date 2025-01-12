import { Icon } from "@rneui/base";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ButtonGroup from "../ButtonGroup";
import ProductDetail from "../../models/ProductDetail";
import useCartStore from "../../screens/Cart/store/CartStore";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../../type";

interface ProductCardProps {
  adjust: boolean;
  product: ProductDetail
}

const ProductCard: React.FC<ProductCardProps> = ({ adjust, product }) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  }
  const remove = useCartStore((state) => state.removeFromCart)
  const nav = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableOpacity onPress={() => {
      nav.navigate("ProductDetail", { id: product.id })
    }} className="flex h-[120] flex-row mb-[25] w-full flex-wrap justify-between"
    >
      <View className="flex items-center justify-center ">
        <Image
          source={{ uri: product.product_image }}
          className=" w-[80px] h-[80px] rounded-lg"
        />
      </View>

      <View className=" flex flex-row items-center">
        <View className="h-full ">
          <Text className=" overflow-hidden max-w-[165px] text-base mb-1 font-extrabold text-[#181725] ">
            {product.product_name}
          </Text>
          <Text className=" text-[#7C7C7C] text-sm mb-3">
            {product.brand}
          </Text>
          {adjust && (
            <View className="flex flex-row items-center">
              <ButtonGroup onQuantityChange={handleQuantityChange} quantity={product.quantity} />
            </View>
          )}
        </View>

        <View className="flex justify-end items-end">
          <TouchableOpacity
            onPress={() => remove(product.id)}
            className=" mb-[57px]"
          >
            <Icon name="close" size={20} color="#7C7C7C" />
          </TouchableOpacity>
          <Text
            className=" text-[#181725] text-center items-center 
        text-base flex font-bold mr-4 "
          >
            {product.product_price * product.quantity}đ
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
