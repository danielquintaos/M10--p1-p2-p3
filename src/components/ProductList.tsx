import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from './ProductItem';
import { useProducts } from '../hooks/useProducts';
import { useNavigation } from '@react-navigation/native';

export default function ProductList() {
  const navigation = useNavigation();
  const { products, loadMore } = useProducts();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductItem
          id={item.id}
          name={item.name}
          onPress={() => navigation.navigate('Product', { id: item.id })}
        />
      )}
      onEndReached={loadMore}
    />
  );
}
