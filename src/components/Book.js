import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, removeBook }) {
  const { idBook, title, category } = book;
  const percentPH = Math.floor(Math.random() * 101);
  const className = `c100 p${percentPH} blue`;
  return (
    <div className="single-book">
      <div className="book-info">
        <h4 className="category">{category}</h4>
        <h2 className="title">{title}</h2>
        <h4 className="author">A great Author</h4>
        <div className="book-actions">
          <button className="" type="button">
            Comments
          </button>
          <button className="" type="button" onClick={() => removeBook(idBook)}>
            Remove
          </button>
          <button className="" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book-percentaje">
        <div className="percent-circle-container">
          <div className={className}>
            <div className="slice">
              <div className="bar" />
              <div className="fill" />
            </div>
          </div>
        </div>
        <div className="percent">
          <h2>
            {percentPH}
            {' '}
            %
          </h2>
          <span>Completed</span>
        </div>
      </div>
      <div className="book-progress">
        <h4 className="current-chapter">Current Chapter</h4>
        <span className="number-chapter">Chapter I</span>
        <button type="button">Update Progress</button>
      </div>
    </div>
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
