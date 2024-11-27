import { View, Text, FlatList } from "react-native";
import React from "react";
import { ProductCardSquare } from "../../components";
import { Icon, IconButton } from "react-native-paper";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const CategoryDetail = () => {
  return (
    <View>
      {/* <View className=" flex-row flex justify-between items-center mt-10">
        <IconButton
          icon="arrow-left"
          size={30}
          onPress={() => console.log("Pressed")}
        />
        <Text className="text-black  text-2xl font-black  ">
          Fruits
        </Text>
        <IconButton
          icon="filter"
          size={25}
          onPress={() => console.log("Pressed")}
        />
      </View> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View className=" m-3">
            <ProductCardSquare />
          </View>
        )}
      />
    </View>
  );
};

export default CategoryDetail;
