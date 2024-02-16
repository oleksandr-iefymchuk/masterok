import { SEARCH_PRODUCT } from './actionTypes';

const searchProduct = (product) => ({
  type: SEARCH_PRODUCT,
  payload: product,
});

export { searchProduct };
