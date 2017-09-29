
import { combineReducers } from 'redux';  
import authReducer from './authReducer';
import postsReducer from './postsReducer';
import transactionsReducer from './transactionsReducer';
import usersReducer from './usersReducer';
// import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({  
  auth: authReducer,
  posts: postsReducer,
  users: usersReducer,
  // form: formReducer,
  transactions: transactionsReducer
});

export default rootReducer;  