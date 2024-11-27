import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React from "react";

interface ExploreCardProps {
  color: string;
  title: string;
  image: string;
  onPress?: () => void;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ color, title, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}
      className="relative w-[175px] h-[190px] rounded-[18px] shadow border bg-white pt-1 flex items-center"
    >
      <Image source={{ uri: image }} style={{width: '90%', height: '80%', borderRadius: 18 }} />
      <Text className="text-black mt-6 flex-wrap text-center text-lg  leading-snug tracking-tight font-black absolute bottom-2 right-0 left-0">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({});
