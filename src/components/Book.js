import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  const {
    idBoook, title, category,
  } = book;
  return (
    <tr>
      <td>{idBoook}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    idBoook: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
