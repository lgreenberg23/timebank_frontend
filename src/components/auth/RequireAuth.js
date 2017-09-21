
// Higher order component


// import { connect } from 'react-redux';

import React from 'react'

import { Redirect } from 'react-router-dom'

export default function isAuthenticated(WrappedComponent){
  return function (props) {
      if (!localStorage.getItem('jwt')) {
        return <Redirect to='/login' />
      }
      return <WrappedComponent {...props} />
    }
}

//home is the container for everything you DONT want to be accessed
//protected container
in app, import home and function
const AuthedHome = isAuthed(home)
//in route path, do all other routes route path='/'

//good convention - have it in an HOC and protect it

