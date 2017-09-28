import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import './App.css';
// import {connect} from 'react-redux'
//import Home from './components/views/Home'
import Container from './components/Container'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/Register'
import authenticated from './components/HOCs/RequireAuth'
import PublicHome from './components/views/PublicHome'


// import authorize from './components/HOCs/RequireAuth'

class App extends Component {

  // state = {
  //   currentUser: {},
  //   isLoggedIn: localStorage.getItem("token") ? true : false,
  //   loginButtonClicked: false
  // }



  handleNavBarClick = () => {
   
  }

  render() {

    // console.log("isAuthed", this.props.auth.isAuthenticated, "history", this.props.history)
    // const AuthHome = authorize(Home)
    return (
      <div >
          <Route path='/pubHome' component={PublicHome} />
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>
          <Route path='/in' component={authenticated(Container)}/>
      </div>
    );
  }
}

// function mapStateToProps(state){
//   return state
// }
export default withRouter(App)

// export default withRouter(connect(mapStateToProps)(App));

  
//home is the container for everything you DONT want to be accessed
//protected container
// in app, import home and function
// const AuthedHome = isAuthed(home)
//in route path, do all other routes route path='/'

