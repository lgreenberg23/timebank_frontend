import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import './App.css';
import {connect} from 'react-redux'
import Home from './components/views/Home'
import Container from './components/Container'
import LoginForm from './components/auth/LoginForm'
import Navbar from './components/views/NavBar'


// import authorize from './components/HOCs/RequireAuth'

class App extends Component {

  state = {
    currentUser: {},
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    
  }



  handleNavBarClick = () => {
    console.log('figure out how to redirect to the login page!')
  }

  render() {
    // console.log("isAuthed", this.props.auth.isAuthenticated, "history", this.props.history)
    // const AuthHome = authorize(Home)
    return (
      <div>
        <Navbar handleLoginClick={this.handleNavBarClick} {...this.props} />
        <div>
          <Route path="/login" 
            component={this.props.auth.isAuthenticated ? Home : LoginForm}/>
          <Container />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return state
}

export default withRouter(connect(mapStateToProps)(App));

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
