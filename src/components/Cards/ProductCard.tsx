import { Icon } from "@rneui/base";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ButtonGroup from "../ButtonGroup";
import ProductDetail from "../../models/ProductDetail";
import useCartStore from "../../screens/Cart/store/CartStore";

interface ProductCardProps {
  adjust: boolean;
  product: ProductDetail
}

const ProductCard: React.FC<ProductCardProps> = ({ adjust,product }) => {
  const updateQuantity = useCartStore((state)=>state.updateQuantity)
  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  }
  const remove=useCartStore((state)=>state.removeFromCart)
  return (
    <View className="flex pr-4 h-[120] flex-row justify-center items-center mx-2 mb-[25]">
      <Image
        source={{ uri: product.product_image}}
        className=" w-[80px] h-[80px] rounded-lg resize-stretch mr-[33]"
      />
      <View className=" py-1 mr-4">
        <Text className=" overflow-hidden max-w-[165px] text-base mb-1 font-extrabold text-[#181725] ">
          {product.product_name}
        </Text>
        <Text className=" text-[#7C7C7C] text-sm mb-3">
          {product.brand}
        </Text>
        {adjust && (
          <ButtonGroup onQuantityChange={handleQuantityChange}  quantity={product.quantity}/>
        )}
      </View>

      <View className=" w-[90px] ml-7 mr-3    items-end">
        <TouchableOpacity
          onPress={()=>remove(product.id)}
          className=" mb-[57px]  mx-2 "
        >
          <Icon name="close" size={20} color="#7C7C7C" />
        </TouchableOpacity>
        <Text
          className=" text-[#181725] text-center items-center 
        text-base flex font-bold mr-4 "
        >
          {product.product_price}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
