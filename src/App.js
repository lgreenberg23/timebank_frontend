import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import './App.css';

import Auth from './adapters/auth'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/Register'
import Home from './components/Home'
import PublicHome from './components/PublicHome'
import OffersContainer from './components/OffersContainer'
import RequestsContainer from './components/RequestsContainer'
import testHOC from './components/HOCs/testHOC'
import authorize from './components/HOCs/RequireAuth'

class App extends Component {

  state = {
    currentUser: {},
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    jwt: localStorage.getItem("jwt")
  }


  loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        localStorage.setItem('jwt', user.jwt)
        this.setState({
          currentUser: user,
          isLoggedIn: true
        })
      })
  }

  handleButtonClick = () => {
    Auth.me().then(user => {
      console.log(user)

    })
  }

  render() {
    const AuthHome = authorize(Home)
    return (
      <div>
        <div>
          <Route path='/' component={PublicHome}/>
          <Route path="/home" component={AuthHome}/>
          <Route path="/login" render={(props) => <LoginForm login={this.loginUser} {...props}/>}/>
          <Route path="/register" component={RegisterForm}/>
        </div>
      </div>
    );
  }
}

export default App;

// import React from 'react';

// import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

// import '../styles/core.scss';
/*
connect((state) => {
    return {
     isAuthenticated: state.auth.isAuthenticated
    };
})
export default class CoreLayout extends React.Component {

    render () {

        const {dispatch} = this.props;

        return (
            <div>

 class App extends Component {
  render() {
    const AuthedHome = isAuthed(home)
    return (
      <div className="App">
        <OffersContainer />
        <RequestsContainer />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;


//home is the container for everything you DONT want to be accessed
//protected container
// in app, import home and function
// const AuthedHome = isAuthed(home)
//in route path, do all other routes route path='/'



*/
