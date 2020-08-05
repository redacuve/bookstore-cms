import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList(props) {
  const { books } = props;
  return (
    <table>
      <thead>
        <tr>
          <td>Books ID</td>
          <td>Title</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <Book
              key={book.idBook}
              book={{
                idBook: book.idBook,
                title: book.title,
                category: book.category,
              }}
            />
          ))
        }
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
};

const mapStateToProps = state => ({
  books: state.booksReducer.books,
});

export default connect(mapStateToProps, null)(BooksList);
