import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducer = initialState => combineReducers({
  booksReducer: booksReducer(initialState),
});

export default rootReducer;
