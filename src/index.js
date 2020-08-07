import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/percentajeCircle.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';
import { obtainRandomId } from './containers/BooksList';

const initialState = {
  books: [
    { idBook: obtainRandomId(), title: 'Pride and Prejudice', category: 'History' },
    { idBook: obtainRandomId(), title: 'The Prince', category: 'Action' },
    { idBook: obtainRandomId(), title: 'Ulysses', category: 'Biography' },
    { idBook: obtainRandomId(), title: 'On the Origin of Species', category: 'Learning' },
  ],
  filter: '',
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
