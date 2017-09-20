import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import routes from './routes';  
import rootReducer from './reducers/rootReducer';  
// import usersReducer from './reducers/usersReducer'




const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// const rootReducer = combineReducers({users: usersReducer, something else must go here})

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))





ReactDOM.render(<Provider store={store}> <Router history={browserHistory} routes={routes} /><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


// document.querySelector('.wrapper'));