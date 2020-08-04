import React from 'react';
import Book from '../components/Book';
import { connect } from 'react-redux';

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
          books.map(book => <Book book={{ idBook: book.idBook, title: book.title, category: book.category }} />)
        }
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.booksReducer.books
  }
};

export default connect(mapStateToProps, null)(BooksList);
