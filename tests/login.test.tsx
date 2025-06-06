import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';
import { AppProvider } from '../src/context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

jest.useFakeTimers();

it.skip('shows snackbar on login', async () => {
  const { getByText } = render(
    <NavigationContainer>
      <SafeAreaProvider>
        <AppProvider>
          <PaperProvider>
            <LoginScreen />
          </PaperProvider>
        </AppProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );

  fireEvent.press(getByText('Login'));

  await waitFor(() => expect(getByText('Logged in')).toBeTruthy());
});
