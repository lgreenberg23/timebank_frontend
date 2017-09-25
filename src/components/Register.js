import React from 'react'
import {signUp} from '../actions/auth'
import { Form, Input } from 'semantic-ui-react'
// import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'



class Register extends React.Component {

  state = {
    usernameInput: "",
    passwordInput: "",
    email: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const userParams = {
        name: this.state.usernameInput,
        password: this.state.passwordInput,
        email: this.state.email
    }
    this.props.signUp(userParams)
    //after sending the info, now clear the form
    this.setState({
        usernameInput: "",
        passwordInput: "",
        email: ''
    })       
    this.props.history.replace("/home")
  }

  //get the user info from the form through these onChange functions
  handleUsernameChange = (event) => {
    this.setState({
      usernameInput: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      passwordInput: event.target.value
    })
  }  

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field id='name' control={Input} label='Name' value={this.state.usernameInput} onChange={this.handleUsernameChange} placeholder='Name' />
          <Form.Field id='email' control={Input} label='Email' value={this.state.email}  onChange={this.handleEmailChange} placeholder='Email' />
          <Input type='password' onChange={this.handlePasswordChange} value={this.state.passwordInput} label='Password' />
        </Form.Group>
         <input type="submit" value="Signup"/>
        </form>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch){
  return {
    signUp: (userParams) => {
      dispatch(signUp(userParams))
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)

 //         <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput}/>
  //        <input type="email" onChange={this.handleEmailChange} value={this.state.email} />
  //      <Form.Field id='sign up' control={Button} content='Confirm' />
  //       
