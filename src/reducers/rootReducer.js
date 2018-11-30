import {combineReducers} from 'redux';
import weatherReducer from './weatherReducer.js';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;