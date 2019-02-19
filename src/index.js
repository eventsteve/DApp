import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware
} from 'redux';

import App from './app/app';
import rootReducer from './reducers';
import drizzle from 'utils/drizzle';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App drizzle={drizzle}/>
  </Provider>,
  document.getElementById('root')
);