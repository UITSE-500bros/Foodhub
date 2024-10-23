import { View, FlatList, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = Array.from({ length: 4 }, () => `https://picsum.photos/300/115?random=${Math.random()}`);
      await Promise.all(imageUrls.map(url => Image.prefetch(url)));
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        initialNumToRender={2}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginHorizontal: 12,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 400,
    height: 115,
    borderRadius: 10,
  },
});

export default ImageCarousel;