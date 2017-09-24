import React from 'react'
import testHOC from '../HOCs/testHOC'
import Auth from '../../adapters/auth'

class Home extends React.Component {

  logout = () => {
    Auth.logOut()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <p>Welcome</p>
        <button onClick={this.logout}>Logout</button>

      </div>
    )
  }
}

export default Home