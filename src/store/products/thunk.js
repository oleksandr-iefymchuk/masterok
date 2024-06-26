import { getProducts } from './actionCreators';
import { mockedProductsList } from '../../mockedProductsList';

const getProductsThunk = () => {
  return async (dispatch) => {
    try {
      setTimeout(() => {
        dispatch(getProducts(mockedProductsList));
      }, 500);
    } catch (error) {
      throw new Error(error);
    }
  };
};

export { getProductsThunk };
