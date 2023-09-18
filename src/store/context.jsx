import { createContext, useReducer } from 'react';
import { reducer } from './reducer.js';

export const FoodContext = createContext();

const initialState = {
  loading: false,
};

export function ContextProvider(props) {
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <FoodContext.Provider value={value}>
      {props.children}
    </FoodContext.Provider>
  );
}