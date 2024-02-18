import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import searchProductReducer from './searchProduct/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  search: searchProductReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
