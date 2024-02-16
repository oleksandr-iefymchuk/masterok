import { ADD_TO_BASKET } from './actionTypes';

const initialState = {
  basketItems: [],
};

const basketReducer = (state = initialState, action) => {
  const existingItem = state.basketItems.find(
    (item) => item.id === action.payload.id,
  );

  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basketItems: existingItem
          ? state.basketItems.map((item) =>
              item.id === existingItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...state.basketItems, { ...action.payload, quantity: 1 }],
      };
    default:
      return state;
  }
};

export default basketReducer;
