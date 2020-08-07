import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

export const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

export const obtainRandomId = () => Math.floor(Math.random() * 1000);

function BooksList(props) {
  const { books, removeBook } = props;
  const handleRemove = bookId => removeBook(bookId);
  return (
    <table>
      <thead>
        <tr>
          <th>Books ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book
            key={book.idBook}
            book={{
              idBook: book.idBook,
              title: book.title,
              category: book.category,
            }}
            removeBook={handleRemove}
          />
        ))}
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      idBook: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.booksReducer.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: bookId => {
    dispatch(removeBook(bookId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
