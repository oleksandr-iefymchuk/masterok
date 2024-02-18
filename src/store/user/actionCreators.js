import {
  ADD_TO_BASKET,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './actionTypes';

const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product,
});

const addToFavorites = (product) => ({
  type: ADD_TO_FAVORITES,
  payload: product,
});

const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
});

export { addToBasket, addToFavorites, removeFromFavorites };
