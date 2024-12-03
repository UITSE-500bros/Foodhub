import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

const ImageCarousel = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = Array.from(
        { length: 4 },
        () => `https://picsum.photos/400/115?random=${Math.random()}`
      );
      await Promise.all(imageUrls.map((url) => Image.prefetch(url)));
      setImages(imageUrls);
    };

    fetchImages();

  }, []);

  return (
    <View className="w-full m-5  ">
      <Carousel
        width={width}
        height={width / 3}
        data={images}
        loop
        autoPlay
       
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
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
