import React from 'react'
import { logout } from '../../actions/auth'
import PostContainer from '../PostsContainer'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'



const Home = () => {


    return (
      <div>
        <h2>Welcome to the ADVA Timebank</h2>
        <PostContainer />
      </div>
    )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logout }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)




