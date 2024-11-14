import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface ExploreCardProps {
  color: string;
  title: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ color, title }) => {
  return (
    <View
      style={{ backgroundColor: color }}
      className="flex justify-center items-center w-[175px] h-[190px] rounded-[18px] shadow border "
    >
      <Image
        source={require("../../../assets/Vector.png")}
        className="w-[100px] h-[74px] "
      />
      <Text className="text-black mt-6 flex-wrap text-center text-lg  leading-snug tracking-tight font-black">
        {title}
      </Text>
    </View>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({});
