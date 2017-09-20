
import { combineReducers } from 'redux';  
import authReducer from './authReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({  
  auth: authReducer,
  user: usersReducer
});

export default rootReducer;  