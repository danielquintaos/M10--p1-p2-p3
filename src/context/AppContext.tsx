import React, { createContext, useContext, useReducer } from 'react';

interface State {
  user: string | null;
  images: string[];
}

const initialState: State = {
  user: null,
  images: [],
};

type Action =
  | { type: 'login'; user: string }
  | { type: 'logout' }
  | { type: 'addImage'; uri: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.user };
    case 'logout':
      return { ...state, user: null };
    case 'addImage':
      return { ...state, images: [...state.images, action.uri] };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
  login: (email: string, password: string) => void;
  addImage: (uri: string) => void;
}>({
  state: initialState,
  dispatch: () => null,
  login: () => {},
  addImage: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (email: string, password: string) => {
    dispatch({ type: 'login', user: email });
  };

  const addImage = (uri: string) => {
    dispatch({ type: 'addImage', uri });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, login, addImage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
