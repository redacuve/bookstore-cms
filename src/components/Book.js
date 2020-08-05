import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  const {
    idBook, title, category,
  } = book;
  return (
    <tr>
      <td>{idBook}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    idBook: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
