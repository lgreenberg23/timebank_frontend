import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

