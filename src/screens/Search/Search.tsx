import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import { getProductBySearchQueryApi } from '../../screens/Home/services/Home.service';
import ProductCardSquare from '../../components/Cards/ProductCardSquare';
import Product from '../../models/Product';
import Indicator from '../../components/Indicator';
import { useSearchStore } from './SearchStore';
import { FlatList } from 'react-native-gesture-handler';

export default function Search() {

  const {searchQuery, setSearchQuery} = useSearchStore()
  const [searchProduct, setSearchProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSearchResults = (results: Product[]) => {
    setSearchProduct(results);
  }
  return (
    <SafeAreaView className='flex p-4 '>
      <View className='flex justify-center items-center mb-11'>
      <SearchBar
      
        searchQuery={searchQuery}
        onChangeSearch={(query) => setSearchQuery(query)}
        onSearchResults={handleSearchResults}
      />
      </View>
      {isLoading ? (
        <Indicator />
      ) : (
        <FlatList
          style={{margin: 10}}
          numColumns={2}
          data={searchProduct}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCardSquare product={item} />}
        />
      )}
      {searchProduct.length === 0  && (
        <Text className='text-center text-lg text-gray-500'>Không tìm thấy sản phẩm</Text>

      )}
    </SafeAreaView>
  );
}