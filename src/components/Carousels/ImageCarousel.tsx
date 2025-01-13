import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Banner from "../../models/banner";
import { getBannerImagesApi } from "../../screens/Home/services/Home.service";
import { Skeleton } from "@rneui/themed";
const width = Dimensions.get("window").width;
type ImageCarouselProps = {
  images: Banner[];
};

const ImageCarousel = () => {
  const [data, setData] = useState<Banner[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      const res = await getBannerImagesApi();
      setData(res);
    };
    fetchImages();
  }, []);
  console.log(data);
  

  if (data.length === 0) {
    return (
      <View className="w-full m-5  ">
        <Skeleton height={115} width={width} />
      </View>
    );
  }

  return (
    <View className="w-full ml-3  mt-9  ">
      <Carousel
        width={width}
        height={width / 3}
        data={data}
        loop
        autoPlay
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image_link }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  imageContainer: {
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
    width: width - 24,
  },
  image: {
    width: width - 24,
    height: 115,
    borderRadius: 10,
  },
});

export default ImageCarousel;
