import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import { categories, obtainRandomId } from './BooksList';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({
      idBook: obtainRandomId(),
      title,
      category,
    });
    this.setState({ title: '', category: 'Action' });
    document.querySelector('#categories').value = 'Action';
  }

  render() {
    const { title } = this.state;
    return (
      <div className="add-new-book">
        <h3>Add New Book</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="book-title">
            <input
              type="text"
              value={title}
              id="book-title"
              name="title"
              placeholder="Book Title"
              onChange={this.handleChange}
            />
          </label>
          <select name="category" id="categories" onChange={this.handleChange}>
            {categories.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <button className="add-book" type="submit">Add Book</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
