import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import './App.css';

// import {Login, SignUp, LogOut} from './actions/auth'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/Register'
import Home from './components/views/Home'
// import PublicHome from './components/PublicHome'
// import OffersContainer from './components/OffersContainer'
import PostsContainer from './components/PostsContainer'
// import RequestsContainer from './components/RequestsContainer'
// import testHOC from './components/HOCs/testHOC'
import authorize from './components/HOCs/RequireAuth'
import Navbar from './components/views/NavBar'

class App extends Component {

  state = {
    currentUser: {},
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    
  }



  handleNavBarClick = () => {
    console.log('figure out how to redirect to the login page!')
  }

  render() {
    const AuthHome = authorize(Home)
    return (
      <div>
        <Navbar handleLoginClick={this.handleNavBarClick} {...this.props} />
        <div>
          <Route path='/' component={Home} />
          <Route path="/posts" component={(props) => <PostsContainer props={props}/>}/>
          <Route path="/home" component={AuthHome}/>
          <Route path="/login" component={(props) => <LoginForm login={this.loginUser} {...props}/>}/>
          <Route path="/register" component={RegisterForm}/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

  // loginUser = (userParams) => {
  //   Auth.login(userParams)
  //     .then(user => {
  //       localStorage.setItem('jwt', user.jwt)
  //       this.setState({
  //         currentUser: user,
  //         isLoggedIn: true
  //       })
  //     })
  // }

  // handleButtonClick = () => {
  //   Auth.me().then(user => {
  //     console.log(user)

  //   })
  // }

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
