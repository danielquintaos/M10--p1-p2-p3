import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppProvider } from './context/AppContext';

export default function App() {
  return (
    <AppProvider>
      <PaperProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </AppProvider>
  );
}
