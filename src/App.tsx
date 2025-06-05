import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppProvider } from './context/AppContext';
import { theme } from './theme';

export default function App() {
  return (
    <AppProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </AppProvider>
  );
}
