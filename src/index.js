import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';

const initialState = {
  books: [
    {idBook: Math.floor(Math.random * 1000), title: 'Pride and Prejudice', category: 'History',},
    {idBook: Math.floor(Math.random * 1000), title: 'The Prince', category: 'Action',},
    {idBook: Math.floor(Math.random * 1000), title: 'Ulysses', category: 'Biography',},
    {idBook: Math.floor(Math.random * 1000), title: 'On the Origin of Species', category: 'Learning',},
  ]
}

const store = createStore(rootReducer(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
