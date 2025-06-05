import React from 'react';
import { View } from 'react-native';
import ProductList from '../components/ProductList';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ProductList />
    </View>
  );
}
