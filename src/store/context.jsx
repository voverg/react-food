import { createContext, useReducer } from 'react';
import { reducer } from './reducer.js';

export const FoodContext = createContext();

const initialState = {
  loading: true,
  catalog: [],
  category: [],
};

export function ContextProvider(props) {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setCatalog = (data) => {
    dispatch({ type: 'SET_CATALOG', payload: {data} });
  };

  value.setCategory = (data) => {
    dispatch({ type: 'SET_CATEGORY', payload: {data} });
  };

  value.setLoading = (isLoading) => {
    dispatch({ type: 'SET_LOADING', payload: {isLoading} });
  };

  return (
    <FoodContext.Provider value={value}>
      {props.children}
    </FoodContext.Provider>
  );
}