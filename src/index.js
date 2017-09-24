import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import routes from './routes';  
import rootReducer from './reducers/rootReducer';  
import '../semantic/dist/semantic.min.css';
// import usersReducer from './reducers/usersReducer'
import { BrowserRouter as Router } from 'react-router-dom'



// const rootReducer = combineReducers({users: usersReducer, something else must go here})

const store = createStore(rootReducer, applyMiddleware(thunk))


// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))





ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();


// document.querySelector('.wrapper'));