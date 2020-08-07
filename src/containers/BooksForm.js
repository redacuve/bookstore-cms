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
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({title: '', category: 'Action'});
    document.querySelector('#categories').value= 'Action';
  }

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="book-title">
          Book Title
          <input type="text" value={title} id="book-title" name="title" onChange={this.handleChange}/>
        </label>
        <select name="category" id="categories"  onChange={this.handleChange}>
          {categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button type="submit">Save Book</button>
      </form>
    );
  }
}

export default BooksForm;
