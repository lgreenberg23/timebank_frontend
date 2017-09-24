import React from 'react'
import Auth from '../../actions/auth'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'


class LoginForm extends React.Component {

  state = {
    usernameInput: "",
    passwordInput: "",
    email: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()


    const userParams = {
      user:{
        name: this.state.usernameInput,
        password: this.state.passwordInput,
        email: this.state.email
      }
    }
    Auth.login(userParams)
      .then((user) => {
        this.setState({
            usernameInput: "",
            passwordInput: "",
            email: ''
        })
        localStorage.setItem("token", user.jwt)
        this.props.history.replace("/home")
      })

  }

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
          <Input type='password' onChange={this.handlePasswordChange} value={this.state.passwordInput} />
        </Form.Group>
         <input type="submit" value="Log in"/>
        </form>
      </div>
    )
  }
}

 //         <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput}/>
  //        <input type="email" onChange={this.handleEmailChange} value={this.state.email} />
  //      <Form.Field id='sign up' control={Button} content='Confirm' />
  //       

export default LoginForm