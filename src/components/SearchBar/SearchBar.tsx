import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import { getProductBySearchQueryApi } from '../../screens/Home/services/Home.service';
import Product from '../../models/Product';

type SearchBarProps = {
  searchQuery: string;
  onChangeSearch?: (query: string) => void;
  onSearchResults: (results: Product[]) => void;
  onSubmit?:(query:string)=>void;
};

export default function SearchBar({ searchQuery, onChangeSearch, onSearchResults,onSubmit }: SearchBarProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === '') {
        onSearchResults([]);
        return;
      }

      setIsLoading(true);
      onSearchResults([]);
      try {
        const res = await getProductBySearchQueryApi(searchQuery);
        onSearchResults(res);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchSearchResults();
    }, 300); // Add a delay to debounce the search input

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <Searchbar
        
        placeholder="Tìm kiếm sản phẩm"
        value={searchQuery}
        onChangeText={onChangeSearch}
        style={styles.searchbar}
        onSubmitEditing={onSubmit ? () => onSubmit(searchQuery) : undefined}
      />
      {isLoading && <ActivityIndicator style={styles.indicator} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  searchbar: {
    borderRadius: 15,
    backgroundColor: 'white',
  },
  indicator: {
    marginTop: 10,
  },
});
