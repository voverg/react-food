import { useContext } from 'react';
import { FoodContext } from '../store/context.jsx';

export const useFoodContext = () => {
  return useContext(FoodContext);
}
