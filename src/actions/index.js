const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const create_book = (book) => {
  return {
    type: CREATE_BOOK,
    payload: book,
  };
};

const remove_book = (book) => {
  return {
    type: REMOVE_BOOK,
    payload: book,
  };
};

export { CREATE_BOOK, REMOVE_BOOK, create_book, remove_book }