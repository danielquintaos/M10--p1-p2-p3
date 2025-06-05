import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';
import { AppProvider } from '../src/context/AppContext';

jest.useFakeTimers();

it('shows snackbar on login', async () => {
  const { getByLabelText, getByText } = render(
    <AppProvider>
      <LoginScreen />
    </AppProvider>
  );

  fireEvent.changeText(getByLabelText('Email'), 'test@example.com');
  fireEvent.changeText(getByLabelText('Password'), 'secret');
  fireEvent.press(getByText('Login'));

  await waitFor(() => expect(getByText('Logged in')).toBeTruthy());
});
