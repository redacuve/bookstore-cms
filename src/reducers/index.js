import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const rootReducer = initialState => combineReducers({
  booksReducer: booksReducer(initialState),
  filterReducer: filterReducer(initialState),
});

export default rootReducer;
