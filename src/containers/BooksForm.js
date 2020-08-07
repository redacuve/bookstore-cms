import React from 'react';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <label htmlFor="book-title">
          Book Title
          <input type="text" value="" id="book-title" />
        </label>
        <select name="categories" id="categories">
          {categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button type="button">Save Book</button>
      </form>
    );
  }
}

export default BooksForm;
