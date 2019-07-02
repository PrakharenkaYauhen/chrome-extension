import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import AppCNT from './containers/AppCNT';
import reducerExtension from './reducers'

import './styles/index.scss';

const store = createStore(reducerExtension, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <AppCNT/>
  </Provider>,
  document.getElementById('root')
);