import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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
        placeholder="Email"
        accessibilityLabel="Email input"
        testID="emailInput"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        label="Password"
        placeholder="Password"
        secureTextEntry
        accessibilityLabel="Password input"
        testID="passwordInput"
      />
      <Button title="Login" onPress={onLogin} accessibilityLabel="loginButton" />
    </View>
  );
}
