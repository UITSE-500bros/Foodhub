import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import ExploreCard from "../../components/Cards/ExploreCard";
import { Category } from "../../models";
import { categoriesService } from "../../service";
import { useNavigation } from "@react-navigation/native";
import { ExploreScreenNavigationProp, RootStackParamList } from "../../../type";
import { getCategoriesApi } from "./services/Explore.service";
import Item from "../Survey/components/Item";
import { SafeAreaView } from "react-native-safe-area-context";
import { Skeleton } from "@rneui/base";
import Indicator from "../../components/Indicator";

const width = Dimensions.get("window").width;
const height = Dimensions.get('window').height

const Explore = () => {
  const [data, setData] = useState<Category[]>([]);

  const [searchQuery, setSearchQuery] = React.useState("");
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategoriesApi();
      setData(categories);
    };
    fetchCategories();
  }, []);


  const nav = useNavigation<ExploreScreenNavigationProp>();

  return (
    <SafeAreaView className="flex mt-14 pb-10  flex-col justify-start items-center">
      <Text className="text-black mt-5 text-2xl font-black ">
        Danh mục sản phẩm
      </Text>
      {/* <Searchbar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
        style={{ width: width - 40, marginTop: 20, borderRadius: 10 }}
      /> */}
      {data.length>0?(<FlatList
      className=" my-6 "
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{paddingBottom: 100}}

        renderItem={({ item }) => (
          <ExploreCard
            image={item.image}
            title={item.name}
            onPress={() => nav.navigate("CategoryDetail", { id: item.id })}
          />
        )}
      />):(
        <Indicator/>
      )}
      
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
