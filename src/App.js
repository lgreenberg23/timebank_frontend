import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Auth from './adapters/auth'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import testHOC from './components/hocs/testHOC'
import authorize from './components/hocs/authorize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <OffersContainer />
        <RequestsContainer />
        <p>Header here</p>

        <div className="container">
          {this.props.children}
        </div>

        <p>Footer here</p>
      </div>
    );
  }
}

export default App;

