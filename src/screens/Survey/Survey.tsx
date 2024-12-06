import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Radio from "./components/Radio";
import { TextInput } from "react-native-paper";
import Item from "./components/Item";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "../../components";

const Survey = () => {
  const foodCategories = [
    "Vegetables",
    "Fruits",
    "Meat",
    "Dairy",
    "Grains",
    "Seafood",
    "Beverages",
    "Snacks",
    "Frozen",
    "Canned",
    "Bakery",
  ];
  const meals = ["Breakfast", "Lunch", "Dinner"];
  const [familyMembers, setFamilyMembers] = useState("");
  const renderItem = ({ item }: any) => <Item title={item} />;
  return (
    <SafeAreaView className="flex gap-5 items-start justify-center flex-col p-6 ">
      <Text className="text-center text-black text-2xl font-bold leading-loose">
        Grocery Preferences
      </Text>
      <View className="flex flex-row items-center justify-center">
        <Text className="text-lg mr-6">Are you a vegetarian?</Text>
        <Radio />
      </View>

      <View className="flex flex-row items-center ">
        <Text className=" mr-5 text-black text-lg  ">
          How many people are in your family?
        </Text>
        <TextInput
          mode="outlined"
          className="w-[50px] h-[30px] "
          value={familyMembers.toString()}
          onChangeText={(text) => setFamilyMembers(text)}
          keyboardType="numeric"
        />
      </View>
      <View className="h-[300px] w-full">
        <Text className="text-lg text-black">
          What type of food do you prefer?
        </Text>

        <FlatList
          data={foodCategories}
          renderItem={renderItem}
          keyExtractor={( index) => index.toString()}
          numColumns={4}
          style={{ width: "100%", height: 100 }}
          columnWrapperStyle={{
            marginBottom: 10,
          }}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />
      </View>

      <View className="h-auto ">
        <Text className="text-lg text-black">What kind of meal ?</Text>
        <View className="flex-row flex ">
          {meals.map((meal, index) => {
            return <Item title={meal} key={index} />;
          })}
        </View>
      </View>

      <TouchableOpacity className=" self-center bg-primary p-3 w-full justify-center items-center rounded-full mt-auto ">
        <Text className="text-white text-2xl"> Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Survey;
