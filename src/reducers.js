import { combineReducers } from 'redux';

import { homeReducer } from './app/home';
import { docReducer } from './app/document';

const rootReducer = combineReducers({
  home: homeReducer,
  doc: docReducer
});

export default rootReducer;