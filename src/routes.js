// import React from 'react';  
// import { Route, IndexRoute } from 'react-router';

// import App from './components/app';  
// import NotFoundPage from './components/pages/not-found-page';

// import HomePage from './components/pages/home-page';  
// import Register from './components/auth/register';  
// import Login from './components/auth/login';  
// import Dashboard from './components/dashboard';  
// import RequireAuth from './components/auth/require-auth';

// export default (  
//   <Route path="/" component={App}>
//     <IndexRoute component={HomePage} />
//     <Route path="register" component={Register} />
//     <Route path="login" component={Login} />
//     <Route path="dashboard" component={RequireAuth(Dashboard)} />  

//     <Route path="*" component={NotFoundPage} />
//   </Route>
// );



import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './components/App';  
import HomePage from './components/home/HomePage';  
import OffersPage from './components/OffersContainer'  
import AboutPage from './components/AboutPage';   
import NewOfferPage from './components/InputForm';  
import LogInPage from './components/LogInPage';

export default (  
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/login" component={LogInPage} />
     <Route path="/offers" component={OffersPage} onEnter={requireAuth}>
       <Route path="/offerss/new" component={NewOfferPage} />
     </Route>
     <Route path="/about" component={AboutPage} />
  </Route>
);

function requireAuth(nextState, replace) {  
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}