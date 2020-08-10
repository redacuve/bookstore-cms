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
  const handleRemove = bookId => {
    removeBook(bookId);
    document.querySelector('.filter select').firstElementChild.selected = true;
  };
  const handleFilterChange = filter => changeFilter(filter);
  return (
    <div className="books-list">
      <nav className="navbar">
        <div>

          <div className="logo">Bookstore CMS</div>
          <div className="books">Books</div>
          <div className="filter">
            <CategoryFilter
              categories={categories}
              changeFilter={handleFilterChange}
            />
          </div>
        </div>
        <div>
          
          {' '}
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0290ff;" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>
        </div>
      </nav>
      <div className="books-container">
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
      </div>
    </div>
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
