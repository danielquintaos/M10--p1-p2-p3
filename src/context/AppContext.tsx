import React, { createContext, useContext, useReducer } from 'react';

interface State {
  user: string | null;
}

const initialState: State = {
  user: null,
};

type Action =
  | { type: 'login'; user: string }
  | { type: 'logout' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.user };
    case 'logout':
      return { ...state, user: null };
    default:
      return state;
  }
}

const AppContext = createContext<{ state: State; dispatch: React.Dispatch<Action>; login: (email: string, password: string) => void }>({
  state: initialState,
  dispatch: () => null,
  login: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (email: string, password: string) => {
    dispatch({ type: 'login', user: email });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, login }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
