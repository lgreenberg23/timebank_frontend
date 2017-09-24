

import React from 'react';
import {Route} from 'react-router';
import App from './App'
import Home from './components/views/Home';
import Login from './components/auth/LoginForm';
import Register from './components/Register';
//import ProtectedView from './components/views/Protected';
import {requireAuthentication} from './components/auth/authentication';

export default(
    <Route path='/' component={App}>
        <Route path='register' component={Register}/>
        <Route path='home' component={Home}/>
        <Route path="login" component={Login}/>
    </Route>)

// import React from 'react';  
// import { Route, IndexRoute } from 'react-router';  
//        <Route path="protected" component={requireAuthentication(ProtectedView)}/>
// import NotFoundPage from './components/pages/not-found-page';
// import Dashboard from './components/dashboard';  
// import RequireAuth from './components/auth/require-auth';

// import HomePage from './components/pages/home-page';  
// import App from './App';  
// import Home from './components/Home';  
// import OffersPage from './components/OffersContainer'  
// import AboutPage from './components/AboutPage';   
// import NewOfferPage from './components/InputForm';  
// import LogInPage from './components/auth/LogInPage';

// export default (  
//   <Route path="/" component={App}>
//     <IndexRoute component={Home} />
//     <Route path="/login" component={LogInPage} />
//      <Route path="/offers" component={OffersPage} onEnter={requireAuth}>
//        <Route path="/offerss/new" component={NewOfferPage} />
//      </Route>
//      <Route path="/about" component={AboutPage} />
//   </Route>
//  );

//     <IndexRoute component={HomePage} />
//     <Route path="register" component={Register} />
//     <Route path="login" component={Login} />
//     <Route path="dashboard" component={RequireAuth(Dashboard)} />  

//     <Route path="*" component={NotFoundPage} />

// function requireAuth(nextState, replace) {  
//   if (!sessionStorage.jwt) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname }
//     })
//   }
// }