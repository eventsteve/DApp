import { combineReducers } from 'redux';
import { homeReducer } from './app/home';

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;