import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import ExploreCard from "../../components/Cards/ExploreCard";
import { Category } from "../../models";
import { categoriesService } from "../../service";

const width = Dimensions.get("window").width;

const Explore = () => {
  const [data, setData] = useState<Category[]>([]);

  const [searchQuery, setSearchQuery] = React.useState("");
  useEffect(() => {
    categoriesService.getCategories().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <View className="flex mt-14  flex-col justify-start items-center">
      <Text className="text-black mt-5 text-2xl font-black ">
        Find Products
      </Text>
      <Searchbar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
        style={{ width: width - 40, marginTop: 20, borderRadius: 10 }}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <ExploreCard
              onPress={() => {
                console.log("Press");
              }}
              title={item.categoryName}
              color={""}
              image={item.categoryImage}
            />
          );
        }}
        keyExtractor={(item) => item._id}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
