import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useState } from "react";

const ImageCarousel = () => {
  const Images = [
    { id: 1, uri: "https://picsum.photos/400/115?random=1" },
    { id: 2, uri: "https://picsum.photos/400/115?random=2" },
    { id: 3, uri: "https://picsum.photos/400/115?random=3" },
    { id: 4, uri: "https://picsum.photos/400/115?random=4" },
    { id: 5, uri: "https://picsum.photos/400/115?random=5" },
    { id: 6, uri: "https://picsum.photos/400/115?random=6" },
  ];
  const width = Dimensions.get("window").width;

  return (
    <View className="w-full mx-3">
      <FlatList
        data={Images}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: width,
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={{ uri: item.uri } }
              className=" w-[400px] h-[115px]" />
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
       
      />
    </View>
  );
};

export default ImageCarousel;
