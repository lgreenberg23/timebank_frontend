import React from 'react'
import {signUp} from '../actions/auth'
import { Form, Input } from 'semantic-ui-react'
// import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'



class Register extends React.Component {

  state = {
    name: "",
    password: "",
    email: "",
    location: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const userParams = {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        location: this.state.location
    }
    this.props.signUp(userParams, this.props.history)
    //after sending the info, now clear the form
    this.setState({
        name: "",
        password: "",
        email: '',
        location: ''
    })       
    // this.props.history.replace("/home")
  }

  //get the user info from the form through these onChange functions
  handleUsernameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }  

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }  

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
      <br></br>
      <br></br>
      <br></br>
        <form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field id='name' control={Input} label='Name' value={this.state.name} onChange={this.handleUsernameChange} placeholder='Name' />
          <Form.Field id='email' control={Input} label='Email' value={this.state.email}  onChange={this.handleEmailChange} placeholder='Email' />
          <Form.Field control={Input} label='Location' value={this.state.location}  onChange={this.handleLocationChange} placeholder='Location' />
          <Input type='password' onChange={this.handlePasswordChange} value={this.state.password} label='Password' />
        </Form.Group>
         <input type="submit" value="Signup"/>
        </form>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch){
  return {
    signUp: (userParams, history) => {
      dispatch(signUp(userParams, history))
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)

 //         <input type="text" onChange={this.handleUsernameChange} value={this.state.name}/>
  //        <input type="email" onChange={this.handleEmailChange} value={this.state.email} />
  //      <Form.Field id='sign up' control={Button} content='Confirm' />
  //       
