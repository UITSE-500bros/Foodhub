import { RouteProp, useRoute } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { RootStackParamList } from "../../../type";
import { ProductCarousel } from "../../components";
import ProductDetailInterface from "../../models/ProductDetail";
import { formattedPrice } from "../../utils/formattesPrice";
import useCartStore from "../Cart/store/CartStore";
import { useFavoriteStore } from "../Favorite/FavoriteStore";
import { getNewArrivalProductsApi, getRecommendedProductsApi } from "../Home/services/Home.service";
import { getProductsDetailByIDApi } from "./service/ProductDetial.service";
const ProductDetail = () => {
  const [data, setData] = useState([]);

  const [product, setProduct] = React.useState<ProductDetailInterface | null>(
    null
  );
  const route = useRoute<RouteProp<RootStackParamList, "ProductDetail">>();
  const { id } = route.params;

  // const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const {addToFavoriteOptimistic, removeFromFavoriteOptimistic} = useFavoriteStore();

  const addToCart = useCartStore((state) => state.addToCart);

  const isFavorite = useFavoriteStore((state) => state.isFavorite);
  const addToFavorite = useFavoriteStore((state) => state.addToFavorite);
  const removeFromFavorite = useFavoriteStore(
    (state) => state.removeFromFavorite
  );
  const favoriteItems = useFavoriteStore((state) => state.favoriteProducts);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductsDetailByIDApi(id);
        setProduct(res[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();

    const fetchNewArrivalProducts = async () => {
      const res = await getRecommendedProductsApi(id);
      setData(res);
    };
    fetchNewArrivalProducts();
  }, [id]);

  const handleFavoritePress = async () => {
    if (product === null) return;

    const isFav = isFavorite(product.id);

    // Optimistically update the UI
    if (!isFav) {
      addToFavoriteOptimistic(product); // Optimistically add
    } else {
      removeFromFavoriteOptimistic(product.id); // Optimistically remove
    }

    try {
      if (!isFav) {
        // Perform the actual API call
        await addToFavorite(product);
      } else {
        await removeFromFavorite(product.id);
      }
    } catch (error) {
      console.error("Failed to update favorite status", error);

      // Rollback the optimistic update
      if (!isFav) {
        removeFromFavoriteOptimistic(product.id); // Revert optimistic add
      } else {
        addToFavoriteOptimistic(product); // Revert optimistic remove
      }
    }
  };

  const handleAddToCart = (product: ProductDetailInterface) => {
    if (product === null) return;
    addToCart(product);
    console.log(product);

    Toast.show({
      type: "success",

      text1: "Added to cart successfully",
      visibilityTime: 2000,
      autoHide: true,
    });
  };

  if (product === null) {
    return (
      <View className="flex-1 justify-center items-center ">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView className="pb-5 flex items-center flex-1 px-3 h-full w-full">
        <View className="flex items-center justify-center  min-w-[300px] w-full max-h-1/3 px-[42px] mb-7  bg-[#F2F3F2]">
          <Image
            className="w-full h-[200px]"
            source={{
              uri: product.product_image,
            }}
          />
        </View>
        <View className="flex flex-1 gap-4  px-[20px]">
          <View className="flex flex-row justify-between">
            <Text className="font-black min-w-[320px] text-2xl overflow-hidden pr-2  ">
              {product.product_name}
            </Text>

            <Icon
              containerStyle={{
                backgroundColor: "transparent",
                borderRadius: 50,
              }}
              name={isFavorite(id) ? "favorite" : "favorite-outline"}
              size={30}
              color="#7C7C7C"
              onPress={handleFavoritePress}
            />
          </View>
          <View className="flex flex-row justify-between">
            {/* <View className="flex flex-row items-center justify-center">
              <ButtonGroup quantity={quantity} onQuantityChange={setQuantity} />
            </View> */}
            <Text className="font-black text-2xl tracking-wide	">
              {formattedPrice(product.product_price)}
            </Text>
          </View>
          <View className=" h-0.5 bg-black" />
          <View>
            <View className="flex flex-row justify-between items-center">
              <Text className="font-black text-base tracking-wide">
                Description
              </Text>
              <TouchableOpacity onPress={toggle}>
                <Image
                  source={require("../../../assets/open.png")}
                  className=""
                />
              </TouchableOpacity>
            </View>
            {isOpen && <Text>{product.product_detail}</Text>}
          </View>
          <View className=" h-0.5 bg-black" />
          <View className="flex flex-row justify-between items-center">
            <Text className="font-black text-base tracking-wide">Review</Text>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/arrow.png")}
                className=""
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => handleAddToCart(product)}
        className="bg-[#53B175] mt-5 h-[70px] self-center  justify-center items-center    max-w-[367px] w-full rounded-3xl"
      >
        <Text className="text-white text-lg font-semibold">Add to cart</Text>
      </TouchableOpacity>
      <ProductCarousel products={data} title="Sản phẩm gợi ý" />
    </ScrollView>
  );
};

export default ProductDetail;
