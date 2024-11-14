import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ExploreCard from "../../components/Cards/ExploreCard";
import { Searchbar } from "react-native-paper";

const width = Dimensions.get("window").width;

const Explore = () => {
  const data = [
    { id: 1, title: "Fruits", color: "red" },
    { id: 2, title: "Vegetables", color: "green" },
    { id: 3, title: "Meat", color: "blue" },
    { id: 4, title: "Fish", color: "yellow" },
    { id: 5, title: "Dairy", color: "purple" },
    { id: 6, title: "Beverages", color: "pink" },
    { id: 7, title: "Snacks", color: "orange" },
    { id: 8, title: "Bakery", color: "brown" },
  ];

  const [searchQuery, setSearchQuery] = React.useState("");

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
        renderItem={({ item }) => (
          <View className="flex m-[5px]">
            <TouchableOpacity onPress={() => console.log("Pressed")}>
              <ExploreCard title={item.title} color={item.color} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20 }}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
