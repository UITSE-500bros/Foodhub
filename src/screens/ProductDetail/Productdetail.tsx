import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { AdjustButton } from "../../components";
import { useRoute } from "@react-navigation/native";
import Product from "../../models/Product";
import { getProductsDetailByIDApi } from "./service/ProductDetial.service";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonGroup from "../../components/ButtonGroup";

const ProductDetail = () => {
  const [product, setProduct] = React.useState<Product | null>(null);
  const route = useRoute();
  const { id } = route.params;
  const [isloading, setIsloading] = useState(true);
  const [quantity,setQuantity]=useState(1)
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductsDetailByIDApi(id);
        setProduct(res[0]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsloading(false);
      }
    };
    fetchProduct();
  }, [id]);
  console.log("product", product);

  if (product === null) {
    return (
      <View className="flex-1 justify-center items-center ">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView className="relative flex flex-1 w-full">
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
          <View>
            <Text className="font-black text-2xl tracking-wide">
              {product.product_name}
            </Text>
            <Text className="text-[#7C7C7C] text-base">1kg, Price</Text>
          </View>

          <Image source={require("../../../assets/bookmark.png")} />
        </View>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row items-center justify-center">
            <ButtonGroup />
          </View>
          <Text className="font-black text-2xl tracking-wide	">$4.99</Text>
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
          {isOpen && (
            <Text>
              An apple is an edible fruit produced by an apple tree. Apple trees
              are cultivated worldwide and are the most widely grown species in
              the genus Malus. The tree originated in Central Asia, where its
              wild ancestor, Malus sieversii, is still found today.
            </Text>
          )}
        </View>
        <View className=" h-0.5 bg-black" />
        <View className="flex flex-row justify-between items-center">
          <Text className="font-black text-base tracking-wide">Review</Text>
          <TouchableOpacity>
            <Image source={require("../../../assets/arrow.png")} className="" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity className="bg-[#53B175] h-[70px] flex justify-center items-center self-center absolute bottom-[20px] max-w-[367px] w-full rounded-3xl">
        <Text className="text-white text-lg font-semibold">Add to cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductDetail;
