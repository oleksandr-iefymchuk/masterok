import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import userReducer from './user/reducer';
import productsReducer from './products/reducer';
import appReducer from './appReduser/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  app: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
