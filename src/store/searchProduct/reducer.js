import { SEARCH_PRODUCT } from './actionTypes';

const initialState = {
  searchValue: '',
};

const searchProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return {
        ...state,
        searchValue: action.payload,
      };

    default:
      return state;
  }
};

export default searchProductReducer;
