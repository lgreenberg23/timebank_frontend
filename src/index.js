import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import usersReducer from './reducers/usersReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(usersReducer, composeWithDevTools(applyMiddleware(thunk)))

// const rootReducer = combineReducers({users: usersReducer, something else must go here})

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))





ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
