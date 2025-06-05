import React, { createContext, useContext, useReducer } from 'react';
import { Snackbar } from 'react-native-paper';
import * as auth from '../services/auth';

interface State {
  user: string | null;
  notification: string | null;
}

const initialState: State = {
  user: null,
  notification: null,
};

type Action =
  | { type: 'login'; user: string }
  | { type: 'logout' }
  | { type: 'notify'; message: string }
  | { type: 'clearNotification' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.user };
    case 'logout':
      return { ...state, user: null };
    case 'notify':
      return { ...state, notification: action.message };
    case 'clearNotification':
      return { ...state, notification: null };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  showNotification: (message: string) => void;
}>({
  state: initialState,
  dispatch: () => null,
  login: async () => {},
  logout: () => {},
  showNotification: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email: string, password: string) => {
    const result = await auth.login(email, password);
    dispatch({ type: 'login', user: result.email });
    dispatch({ type: 'notify', message: 'Logged in' });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
    dispatch({ type: 'notify', message: 'Logged out' });
  };

  const showNotification = (message: string) => {
    dispatch({ type: 'notify', message });
  };

  const onDismissSnackBar = () => dispatch({ type: 'clearNotification' });

  return (
    <AppContext.Provider value={{ state, dispatch, login, logout, showNotification }}>
      {children}
      <Snackbar visible={!!state.notification} onDismiss={onDismissSnackBar}>
        {state.notification}
      </Snackbar>
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
