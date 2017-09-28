
import { combineReducers } from 'redux';  
import authReducer from './authReducer';
import postsReducer from './postsReducer';
import transactionsReducer from './transactionsReducer';
// import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({  
  auth: authReducer,
  posts: postsReducer,
  // form: formReducer,
  transactions: transactionsReducer
});

export default rootReducer;  