import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware
} from 'redux';
import { DrizzleProvider } from 'drizzle-react'
import {options} from './utils/drizzle'
import App from './app/app';
import rootReducer from './reducers';
import drizzle from 'utils/drizzle';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <DrizzleProvider options={options}>
    <Provider store={store}>
      <App/>
    </Provider>
  </DrizzleProvider>,
  document.getElementById('root')
);