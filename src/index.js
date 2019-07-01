import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import App from './components/App';
import reducerCalendar from './reducers'

import './styles/index.scss';

const store = createStore(reducerCalendar, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);