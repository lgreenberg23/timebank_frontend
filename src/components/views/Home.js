import React from 'react'
import testHOC from '../HOCs/testHOC'
import {logout} from '../../actions/auth'
import PostForm from '../PostForm'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'


class Home extends React.Component {

  logout = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <p>Welcome</p>
        <button onClick={this.logout}>Logout</button>
        <PostForm />

      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  bindActionCreators(logout, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)