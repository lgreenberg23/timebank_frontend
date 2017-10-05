import React from 'react'
import { connect } from 'react-redux'
import * as PostActions from '../actions/posts'
import { bindActionCreators } from 'redux'
import AllPosts from './views/AllPosts'
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const PostsContainer = (props) => {
  
  return (
    <div >
      <br/>
      <div >
        <Link to='/newPost' ><Button basic style={{backgroundColor: '#352B89'}}>Create a New Post</Button></Link>
      </div>
      <br/>
      <AllPosts posts={props.posts}/>
      <br></br><br></br> 
    </div>
  )

}


function mapStateToProps(state) {
  return {
     posts: state.posts.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)


// https://react.semantic-ui.com/modules/dropdown -- FILTER POSTS