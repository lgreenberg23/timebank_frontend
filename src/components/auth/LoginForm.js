import React from 'react'
import { login }from '../../actions/auth'
import { Form, Input, Button } from 'semantic-ui-react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';


class LoginForm extends React.Component {

  state = {
    emailInput: "",
    passwordInput: "",
  }

   handleSubmit = (event) => {
      event.preventDefault()
      const userParams = {
         email: this.state.emailInput,
         password: this.state.passwordInput,
      }
      //call the login method from the auth action creator
      this.props.login(userParams, this.props.history)
      .then(res => this.props.history.push("/in/home"))
      // now clear the form
      this.setState({
         emailInput: "",
         passwordInput: "",
      })
      // this should redirect to user homepage eventually
   }

   handleEmailChange = (event) => {

      this.setState({
         emailInput: event.target.value
      })
   }

   handlePasswordChange = (event) => {
      this.setState({
         passwordInput: event.target.value
      })
   }  


  render() {
    return (
      <div>
      <br></br>
      <br></br>
      <br></br>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field>
            <Input type="text" label='Email' value={this.state.emailInput} 
              onChange={this.handleEmailChange} placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <Input type='password' onChange={this.handlePasswordChange} 
              value={this.state.passwordInput} label="Password" placeholder='password'/>
          </Form.Field>
        </Form.Group>
         <Button type='submit'>Log In</Button>
        </Form>
        <br></br>
        <Link to='/register'><Button basic color='violet'>Not a member yet? Sign Up</Button></Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    isAuthenticated: state.isAuthenticated 
  }
}

function mapDispatchToProps(dispatch){
  return {
    login: (userParams, history) => {
      return dispatch(login(userParams, history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)


 //         <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput}/>
  //        <input type="email" onChange={this.handleEmailChange} value={this.state.email} />
  //      <Form.Field id='sign up' control={Button} content='Confirm' />
  //       
