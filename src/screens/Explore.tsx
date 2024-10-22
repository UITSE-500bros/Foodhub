import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExploreCard from "../components/Cards/ExploreCard";

const Explore = () => {
  return (
    <ScrollView >
      <View className=" mt-14 flex flex-col justify-center items-center">
        <Text className="text-black mt-5 text-xl font-black font-inter ">Find Products</Text>
      </View>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
