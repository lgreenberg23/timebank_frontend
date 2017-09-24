
import { combineReducers } from 'redux';  
import authReducer from './authReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({  
  auth: authReducer,
  user: usersReducer
});

export default rootReducer;  