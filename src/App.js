import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import './App.css';
import Container from './components/Container'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/Register'
import authenticated from './components/HOCs/RequireAuth'
import PublicHome from './components/views/PublicHome'


// import authorize from './components/HOCs/RequireAuth'

class App extends Component {


  render() {

    return (
      <div >
          <Route path='/pubHome' component={PublicHome} />
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>
          <Route path='/' component={authenticated(Container)}/>
      </div>
    );
  }
}


export default withRouter(App)


  


