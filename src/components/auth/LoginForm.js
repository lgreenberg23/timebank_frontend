LoginForm.js

import React, { PropTypes } from 'react';  
import { connect } from 'react-redux';  
import { Field, reduxForm } from 'redux-form';  
import { loginUser } from '../../actions';

import TextInput from './common/TextInput';  
import {bindActionCreators} from 'redux';  
import * as sessionActions from '../actions/sessionActions';

class LogInPage extends React.Component {  

   state = {
   	credentials: {
   		email: '', 
   		password: ''
   	}
   }


  onChange = (event) => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name="email"
            label="email"
            value={this.state.credentials.email}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          <input
            type="submit"
            value="sign in"/>
        </form>
      </div>
      
  );
  }
}

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(LogInPage);  


