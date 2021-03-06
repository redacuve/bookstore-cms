import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const booksReducer = initialState => (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: state.books.concat(action.payload),
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter(b => b.idBook !== action.payload),
      };
    default:
      return state;
  }
};

export default booksReducer;
