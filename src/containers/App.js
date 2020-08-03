import React from 'react';
import BooksList from './BooksList';
import BooksForm from '../components/BooksForm';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;