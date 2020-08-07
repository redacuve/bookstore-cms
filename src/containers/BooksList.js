import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

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
  const {
    books, removeBook, changeFilter, filter,
  } = props;
  let booksFiltered = [];
  if (filter !== '') {
    booksFiltered = books.filter(b => b.category === filter);
  } else {
    booksFiltered = [...books];
  }
  const handleRemove = bookId => removeBook(bookId);
  const handleFilterChange = filter => changeFilter(filter);
  return (
    <table>
      <thead>
        <tr>
          <th>Books ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book</th>
          <th>
            Sort By:&nbsp;
            <CategoryFilter
              categories={categories}
              changeFilter={handleFilterChange}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {booksFiltered.map(book => (
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
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  filter: state.filterReducer.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: bookId => {
    dispatch(removeBook(bookId));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
