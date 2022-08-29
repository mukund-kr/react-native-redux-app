import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({
  moviesReducer,
  counterReducer,
});
