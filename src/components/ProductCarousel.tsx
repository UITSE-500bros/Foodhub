import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

import ProductCardSquare from './ProductCardSquare'

type ProductCarouselProps = {
    title: string
}

const ProductCarousel = ({title}:ProductCarouselProps) => {
  return (
    <View className="w-full px-4">
    <View className="flex flex-row items-center justify-between w-full">
      <Text className=" text-[#181725] text-2xl font-semibold ">
        {title}
      </Text>
      <Button mode="text" labelStyle={styles.buttonText}>
        See All
      </Button>
    </View>
    <View className="flex flex-row mx-3">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={() => <View className=" m-2">
          <ProductCardSquare />
        </View>}
        keyExtractor={(item) => item.toString()}
        horizontal
        />
      </View>
  </View>
  )
}

export default ProductCarousel

const styles = StyleSheet.create({
    buttonText: {
        color: "#53B175",
        fontSize:16,
        fontWeight: 600,
        fontStyle: "normal",
        lineHeight: 24,
      },
})