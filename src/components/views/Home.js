import React from 'react'
import { logout } from '../../actions/auth'
import PostContainer from '../PostsContainer'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'



const Home = () => {


    return (
      <div>
        <h2>All Posts</h2>
        <PostContainer />
      </div>
    )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logout }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)




