import React from 'react';
import { List } from 'react-native-paper';

interface Props {
  id: number;
  name: string;
  onPress: () => void;
}

export default function ProductItem({ id, name, onPress }: Props) {
  return <List.Item title={name} onPress={onPress} />;
}
