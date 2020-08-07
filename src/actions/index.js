const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = bookId => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

export {
  CREATE_BOOK, REMOVE_BOOK, createBook, removeBook,
};
