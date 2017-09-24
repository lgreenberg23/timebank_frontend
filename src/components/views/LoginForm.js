
import React from 'react'
import Auth from '../../adapters/auth'


class LoginForm extends React.Component {

  state = {
    usernameInput: "",
    passwordInput: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()


    const userParams = {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    }
    Auth.login(userParams)
      .then((user) => {
        this.setState({
          usernameInput: "",
          passwordInput: ""
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
  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput}/>
          <input type="password" onChange={this.handlePasswordChange} value={this.state.passwordInput} />
          <input type="submit" value="Signup"/>
        </form>
      </div>
    )
  }
}


export default LoginForm



