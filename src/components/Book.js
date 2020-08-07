import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, removeBook }) {
  const {
    idBook, title, category,
  } = book;
  return (
    <tr>
      <td>{idBook}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={() => removeBook(idBook)}>Remove Book</button></td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    idBook: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
