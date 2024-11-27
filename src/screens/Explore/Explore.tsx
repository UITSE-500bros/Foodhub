import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ExploreCard from "../../components/Cards/ExploreCard";
import { Searchbar } from "react-native-paper";
import { categoriesService } from "../../service";
import { Category } from "../../models";

const width = Dimensions.get("window").width;

const Explore = () => {
  const [data, setData] = useState<Category[]>([]);


  const [searchQuery, setSearchQuery] = React.useState("");
  useEffect(() => {
    categoriesService.getCategories().then(res => {
      setData(res);
    });
  }, []);

  return (
    <View className="flex-1 mt-14 flex flex-col justify-start items-center">
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
          if (item.categoryImage !== null) {
            return (
              <View style={{ flex: 1 }}>
                <ExploreCard
                  onPress={() => {
                    console.log("Press");
                  }}
                  title={item.categoryName}
                  color={""}
                  image={item.categoryImage}
                />
              </View>
            );
          } else {
            return null;
          }
        }}
        keyExtractor={(item) => item._id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20, backgroundColor: "red", width: width }}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
