import storeActionType from './actionTypes';

const selectCategory = (category) => ({
  type: storeActionType.SET_SELECTED_CATEGORY,
  payload: category,
});

const selectSubcategory = (subcategory) => ({
  type: storeActionType.SET_SELECTED_SUBCATEGORY,
  payload: subcategory,
});

const searchProduct = (product) => ({
  type: storeActionType.SEARCH_PRODUCT,
  payload: product,
});

export { selectCategory, selectSubcategory, searchProduct };
