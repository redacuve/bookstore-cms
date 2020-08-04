import { combineReducers} from 'redux';
import books from './books';

const rootReducer = combineReducers({
    booksReducer,
})

export default rootReducer;