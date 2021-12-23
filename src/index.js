//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import './css/styles.scss';
import formReducer from './reducers/form';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(formReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('appMaster'));

