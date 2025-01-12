import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Skeleton } from '@rneui/themed';
import { getProductsByIDApi } from './service/CategoryDetail.service';
import Product from '../../models/Product';
import { ProductCardSquare } from '../../components';

const CategoryDetail = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const { id } = route.params;
  const { height, width } = Dimensions.get('window');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsByIDApi(id);
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  // Number of skeleton cards to display
  const skeletonCount = 6;

  return (
    <View style={{ height: height }} className="flex w-full justify-center items-center">
      {isLoading ? (
        <View style={styles.skeletonContainer}>
          {/* Render skeleton cards */}
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <Skeleton
              key={index}
              width={width / 2 - 20}
              height={250}
              style={styles.skeletonCard}
            />
          ))}
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <ProductCardSquare product={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  skeletonCard: {
    margin: 10,
    borderRadius: 15,
  },
});

export default CategoryDetail;
