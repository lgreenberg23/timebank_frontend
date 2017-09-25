import React from 'react'
import { login }from '../../actions/auth'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'


class LoginForm extends React.Component {

  state = {
    usernameInput: "",
    passwordInput: "",
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const userParams = {
        name: this.state.usernameInput,
        password: this.state.passwordInput,
        email: this.state.email
    }
    this.props.login(userParams)
        this.setState({
            usernameInput: "",
            passwordInput: "",
            email: ''
        })
        
        this.props.history.replace("/home")

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
          <Input type='password' onChange={this.handlePasswordChange} value={this.state.passwordInput} label="Password" placeholder='password' />
        </Form.Group>
         <input type="submit" value="Log in"/>
        </form>
      </div>
    )
  }
}

  function mapDispatchToProps(dispatch){
    bindActionCreators(login, dispatch)
  }

export default connect(null, mapDispatchToProps)(LoginForm)


 //         <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput}/>
  //        <input type="email" onChange={this.handleEmailChange} value={this.state.email} />
  //      <Form.Field id='sign up' control={Button} content='Confirm' />
  //       
