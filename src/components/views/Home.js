import React from 'react'
// import testHOC from '../HOCs/testHOC'
import {logout} from '../../actions/auth'
// import PostForm from '../PostForm'
import PostContainer from '../PostsContainer'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


class Home extends React.Component {

  // logout = () => {
  //   this.props.logout()
  //   this.props.history.push('/login')
  // }

  render() {
    return (
      <div>
        <p>Welcome</p>
        <PostContainer />
        <Link to='/newPost' ><Button>Create a new post</Button></Link>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  bindActionCreators(logout, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)
        // <button onClick={this.logout}>Logout</button>

// function mapDispatchToProps(dispatch){
//   return {
//     logout: () => {
//       dispatch(logout)
//     }
//   }
// }



