import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useApp } from '../context/AppContext';

export default function NotificationsScreen() {
  const { showNotification } = useApp();

  return (
    <View>
      <Text variant="titleMedium">Notifications</Text>
      <Button onPress={() => showNotification('New notification!')}>Test</Button>
    </View>
  );
}
