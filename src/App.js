import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import './App.css';
import Container from './components/Container'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/Register'
import authenticated from './components/HOCs/RequireAuth'
import PublicHome from './components/views/PublicHome'


class App extends Component {


  render() {

    return (
      <div >
          <Route exact path='/pubHome' component={PublicHome} />
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/register" component={RegisterForm}/>
          <Route path='/' component={authenticated(Container)}/>
      </div>
    );
  }
}


export default withRouter(App)


  


