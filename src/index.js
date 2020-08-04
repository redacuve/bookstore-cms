import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import rootReducer from './reducers/index';

const obtainRandomId = () => Math.floor(Math.random() * 1000);

const initialState = {
  books: [
    { idBook: obtainRandomId(), title: 'Pride and Prejudice', category: 'History' },
    { idBook: obtainRandomId(), title: 'The Prince', category: 'Action' },
    { idBook: obtainRandomId(), title: 'Ulysses', category: 'Biography' },
    { idBook: obtainRandomId(), title: 'On the Origin of Species', category: 'Learning' },
  ],
};

const store = createStore(rootReducer(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
