import { ADD_TO_BASKET } from './actionTypes';

const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product,
});

export { addToBasket };
