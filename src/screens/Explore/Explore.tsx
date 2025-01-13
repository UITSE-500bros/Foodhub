import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Skeleton } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import ExploreCard from "../../components/Cards/ExploreCard";
import { Category } from "../../models";
import { getCategoriesApi } from "./services/Explore.service";
import { ExploreScreenNavigationProp } from "../../../type";

const width = Dimensions.get("window").width;

const Explore = () => {
  const [data, setData] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigation<ExploreScreenNavigationProp>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategoriesApi();
        setData(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Number of skeleton placeholders
  const skeletonCount = 6;

  return (
    <SafeAreaView className="flex mt-14 pb-10 flex-col justify-start items-center">
      <Text className="text-black mt-5 text-2xl font-black">
        Danh mục sản phẩm
      </Text>
      {isLoading ? (
        <View className="flex flex-wrap flex-row justify-center items-center mt-6">
          {/* Render skeleton placeholders */}
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <Skeleton
              key={index}
              width={150}
              height={190}
              style={{
                borderRadius: 18,
                margin: 8,
              }}
            />
          ))}
        </View>
      ) : (
        <FlatList
          className="my-6"
          data={data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <ExploreCard
              image={item.image}
              title={item.name}
              onPress={() => nav.navigate("CategoryDetail", { id: item.id,name:item.name })}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Explore;
