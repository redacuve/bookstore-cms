import React from 'react';
import Book from '../components/Book';

// eslint-disable-next-line no-unused-vars
function BooksList(props) {
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
        <Book book={{ idBook: 1, title: 'title2', category: 'action' }} />
      </tbody>
    </table>
  );
}

export default BooksList;