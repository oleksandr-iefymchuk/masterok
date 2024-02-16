import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import searchProductReducer from './searchProduct/reducer';
import basketReducer from './basket/reducer';

const rootReducer = combineReducers({
  search: searchProductReducer,
  basket: basketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
