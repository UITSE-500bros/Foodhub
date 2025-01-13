import { Icon } from "@rneui/base";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ButtonGroup from "../ButtonGroup";
import ProductDetail from "../../models/ProductDetail";
import useCartStore from "../../screens/Cart/store/CartStore";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../../type";
import { formattedPrice } from "../../utils/formattesPrice";
import { useFavoriteStore } from "../../screens/Favorite/FavoriteStore";

interface ProductCardProps {
  adjust: boolean;
  product: ProductDetail;
  isFavorite?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  adjust,
  product,
  isFavorite,
}) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  };
  const remove = useCartStore((state) => state.removeFromCart);
  const {removeFromFavorite}= useFavoriteStore()
  const nav = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableOpacity onPress={() => {
      nav.navigate("ProductDetail", { id: product.id })
    }} className="flex flex-1 flex-row mb-[25] justify-between "
    >
      <View className="mr-[30px] flex items-center justify-center">
        <Image
          source={{ uri: product.product_image }}
          className="w-[100px] h-[100px] rounded-lg"
        />
      </View>

      <View className=" flex flex-col  justify-self-stretch">
        <View className=" flex flex-row justify-between ">
          <Text className=" overflow-hidden max-w-[165px] text-base mb-1 font-extrabold text-[#181725] ">
            {product.product_name}
          </Text>

          <TouchableOpacity
            onPress={() => isFavorite ? removeFromFavorite(product.id) : remove(product.id)}
            className=""
          >
            <Icon name="close" size={30} color="#7C7C7C" />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-between items-end">
          <View className="flex flex-col items-center mr-12">
            <Text className=" text-[#7C7C7C] text-sm mb-3">
              {product.brand}
            </Text>
            {adjust && (
              <View className="flex flex-row items-center">
                <ButtonGroup onQuantityChange={handleQuantityChange} quantity={product.quantity} />
              </View>
            )}
          </View>
          <Text
            className=" text-[#181725] text-center text-base font-bold"
          >
            {isFavorite
              ? formattedPrice(product.product_price)
              : formattedPrice(product.product_price * product.quantity)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
