import storeActionType from './actionTypes';

const initialState = {
  selectedCategory: null,
  selectedSubcategory: null,
  searchValue: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case storeActionType.SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.payload };

    case storeActionType.SET_SELECTED_SUBCATEGORY:
      return { ...state, selectedSubcategory: action.payload };

    case storeActionType.SEARCH_PRODUCT:
      return { ...state, searchValue: action.payload };

    default:
      return state;
  }
};

export default appReducer;
