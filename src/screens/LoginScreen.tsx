import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useApp } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const { login } = useApp();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    await login(email, password);
    navigation.navigate('Home' as never);
  };

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={setEmail}
        label="Email"
        accessibilityLabel="Email"
        placeholder="Email"
        testID="email-input"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        label="Password"
        secureTextEntry
        accessibilityLabel="Password"
        placeholder="Password"
        testID="password-input"
      />
      <Button mode="contained" onPress={onLogin}>
        Login
      </Button>
    </View>
  );
}
