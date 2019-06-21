import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { UserAgentProvider } from '@quentin-sommer/react-useragent';
// import './index.css';
import App from './components/App';
import reducerCalendar from './reducers'

import './styles/index.scss';

const store = createStore(reducerCalendar, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <UserAgentProvider ua={window.navigator.userAgent}>
      <App />
    </UserAgentProvider>
  </Provider>,
  document.getElementById('root')
);