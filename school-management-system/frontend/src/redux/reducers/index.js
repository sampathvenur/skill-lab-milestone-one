// src/redux/reducers/index.js

import { combineReducers } from 'redux';
// import your individual reducers here
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  // add other reducers here
});
