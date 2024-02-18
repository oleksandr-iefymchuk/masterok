import {
  ADD_TO_BASKET,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './actionTypes';

const userInitialState = {
  basketProducts: [],
  favoriteProducts: [],
};

const userReducer = (state = userInitialState, action) => {
  const existingItem = state.basketProducts.find(
    ({ id }) => id === action.payload.id,
  );

  const isItemInFavorites = state.favoriteProducts.some(
    ({ id }) => id === action.payload.id,
  );

  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basketProducts: existingItem
          ? state.basketProducts.map((item) =>
              item.id === existingItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...state.basketProducts, { ...action.payload, quantity: 1 }],
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteProducts: isItemInFavorites
          ? state.favoriteProducts
          : [...state.favoriteProducts, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(
          ({ id }) => id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
