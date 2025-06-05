import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

export default function ProductDetailScreen() {
  const route = useRoute<RouteProp<Record<string, { id: number }>, string>>();

  return (
    <View>
      <Text>Product ID: {route.params?.id}</Text>
    </View>
  );
}
